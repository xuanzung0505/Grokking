function addToHM(HM: any, value: number) {
  HM[value]++;
  return HM[value];
}

function removeFromHM(HM: any, value: number) {
  HM[value]--;
  return HM[value];
}

function longestSubarray(nums: number[]): number {
  const HM: { [key: number]: number } = { 0: 0, 1: 0 };
  //grow until next num is the 2nd zero, then shrink, shrink till HM[0] === 1
  let i = 0,
    j = 0,
    res = 0;
  HM[nums[j]]++;

  while (j < nums.length - 1) {
    const num = nums[j + 1];
    if (i === j && HM[0] === 1 && num === 0) {
      i++;
      j++;
      HM[1] = 0;
    } else {
      if (num === 1) {
        const add = addToHM(HM, num);
        if (HM[0] === 0) res = Math.max(add - 1, res);
        else res = Math.max(add, res);
        j++;
      } else {
        if (HM[num] === 0) {
          addToHM(HM, num);
          res = Math.max(HM[1], res);
          j++;
        } else {
          //shrink
          removeFromHM(HM, nums[i]);
          i++;
        }
      }
    }
  }
  return res;
}

let nums = [0, 0, 1, 1];
console.log(longestSubarray(nums));
