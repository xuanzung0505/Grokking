function isValid(num: number, N: number): boolean {
  return num > 0 && num <= N;
}

function firstMissingPositive(nums: number[]): number {
  const N = nums.length;
  //sort
  for (let i = 0; i < N; i++) {
    while (
      isValid(nums[i], N) &&
      nums[i] != i + 1 &&
      (!isValid(nums[nums[i] - 1], N) ||
        (isValid(nums[nums[i] - 1], N) && nums[nums[i] - 1] != nums[i]))
    ) {
      let tmp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[tmp - 1] = tmp;
    }
  }
  //find
  for (let i = 0; i < N; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return N + 1;
}

console.log(firstMissingPositive([1, 1]));
