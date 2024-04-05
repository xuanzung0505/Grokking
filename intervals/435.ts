import fs from "fs";
const readBuffer = fs.readFileSync("./intervals/435.txt");
const input = readBuffer.toString();

const quickSort: (arr: number[][]) => number[][] = (arr: number[][]) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let lArr = [],
    rArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != mid) {
      if (arr[i][1] <= arr[mid][1]) {
        lArr.push(arr[i]);
      } else rArr.push(arr[i]);
    }
  }

  return [...quickSort(lArr), arr[mid], ...quickSort(rArr)];
};

function eraseOverlapIntervals(intervals: number[][]): number {
  const sortedIntervals = quickSort(intervals);
  const arrStart = [];
  let nextStart = Number.MIN_SAFE_INTEGER;
  for (let element of sortedIntervals) {
    if (element[0] >= nextStart) {
      arrStart.push(element[0]);
      nextStart = element[1];
    }
  }

  return intervals.length - arrStart.length;
}
const intervals = input.match(/-?\d+,-?\d+/g)!.map((value) => {
  const arr = value.split(",");
  return [Number(arr[0]), Number(arr[1])];
});

// console.log(intervals);
console.log(eraseOverlapIntervals(intervals));
