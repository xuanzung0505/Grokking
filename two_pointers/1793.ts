function binarySearch(arr: number[], x: number, l: number, h: number) {
  if (l === h) {
    if (x > arr[l]) return l + 1;
    else return l;
  }
  let mid = Math.floor((l + h) / 2);
  if (x <= arr[mid]) return binarySearch(arr, x, l, mid);
  else return binarySearch(arr, x, mid + 1, h);
}

function solve(minArr: number[], N: number, k: number) {
  let result = 0;
  //find left for each right index
  for (let i = k; i < N; i++) {
    const currR = minArr[i];
    const lFound = binarySearch(minArr, currR, 0, k);
    // console.log("currR", currR, "lFound", lFound);
    result = Math.max(result, (i - lFound + 1) * currR);
  }
  return result;
}

function maximumScore(nums: number[], k: number): number {
  const N = nums.length;
  const minArr = new Array(N);
  minArr[k] = nums[k];
  //init minArr
  let currMin = nums[k];
  for (let i = k - 1; i >= 0; i--) {
    if (currMin > nums[i]) {
      currMin = nums[i];
    }
    minArr[i] = currMin;
  }
  currMin = nums[k];
  for (let i = k + 1; i < N; i++) {
    if (currMin > nums[i]) {
      currMin = nums[i];
    }
    minArr[i] = currMin;
  }
  let score = solve(minArr, N, k);

  score = Math.max(score, solve(minArr.reverse(), N, N - k - 1));
  return score;
}

// const arr = [1, 4, 3, 7, 4, 5];
// console.log(maximumScore(arr, 3));
