function addToHashMap(HM: any, num: number) {
  if (HM[num] === undefined) {
    HM[num] = { left: 0, mid: 1, right: 0 };
  } else {
    HM[num].mid++;
  }
  if (HM[num - 1] != undefined) {
    HM[num - 1].right = HM[num].mid;
    HM[num].left = HM[num - 1].mid;
  }
  if (HM[num + 1] != undefined) {
    HM[num + 1].left = HM[num].mid;
    HM[num].right = HM[num + 1].mid;
  }
  return HM[num].left > HM[num].right
    ? HM[num].left + HM[num].mid
    : HM[num].left === HM[num].right && HM[num].left === 0
    ? 0
    : HM[num].right + HM[num].mid;
}

function findLHS(nums: number[]): number {
  const HM: {
    [key: number]: { left: number; mid: number; right: number } | undefined;
  } = {};
  let result = 0;
  for (let num of nums) {
    result = Math.max(result, addToHashMap(HM, num));
  }
  return result;
}

let nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));
