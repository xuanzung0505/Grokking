import fs from "fs";
const readBuffer = fs.readFileSync("./intervals/57.txt");
const input = readBuffer.toString();

const quickSort: (arr: number[][]) => typeof arr = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let pivot = arr[Math.floor(arr.length / 2)];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != mid) {
      if (
        arr[i][0] < pivot[0] ||
        (arr[i][0] === pivot[0] && arr[i][1] < pivot[1])
      ) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const sortedIntervals = quickSort([...intervals, newInterval]);
  return merge(sortedIntervals);
}

function merge(sortedIntervals: number[][]): number[][] {
  const N = sortedIntervals.length;
  //sort the intervals
  let i = 0;
  const result: number[][] = [];

  while (i < N) {
    const M = result.length;
    if (i === 0) {
      result.push(sortedIntervals[i]);
      i++;
      continue;
    }
    if (result[M - 1][1] >= sortedIntervals[i][0]) {
      const newInterval = [
        Math.min(result[M - 1][0], sortedIntervals[i][0]),
        Math.max(result[M - 1][1], sortedIntervals[i][1]),
      ];
      result[M - 1] = newInterval;
    } else {
      result.push(sortedIntervals[i]);
    }
    i++;
  }
  return result;
}
const intervals = input.match(/\d+,\d+/g)!.map((value) => {
  const arr = value.split(",");
  return [Number(arr[0]), Number(arr[1])];
});
// console.log(intervals);

const p = new Promise((resolve, reject) => {
  resolve(insert(intervals, [0, 20001]));
});
(async () => {
  const start = Date.now();
  const result = await p;
  console.log(result);
  console.log(Date.now() - start);
})();
