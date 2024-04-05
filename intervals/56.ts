const quickSort: (arr: number[][]) => typeof arr = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i][0] < pivot[0] ||
      (arr[i][0] === pivot[0] && arr[i][1] < pivot[1])
    ) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

function merge(intervals: number[][]): number[][] {
  const N = intervals.length;
  //sort the intervals
  const sortedIntervals = quickSort(intervals);
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

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  merge([
    [1, 4],
    [4, 5],
  ])
);
