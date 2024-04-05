function longestSubstring(s: string, k: number): number {
  const INIT_HM = { size: 0, valid: 0, totalCount: 0 };
  let HM: { [key: string]: number } = INIT_HM;

  const N = s.length;
  if (N === 0) return 0;
  let result = 0;
  let i = 0,
    j = 0;
  HM[s[j]] = 1;
  HM.size = 1;
  HM.totalCount = 1;
  if (k === 1) {
    result = 1;
    HM.valid = 1;
  }

  while (j + 1 < N) {
    const nextChar = s[j + 1];
    const charInMap = HM[nextChar];

    if (charInMap === undefined) {
      if (HM.size != HM.valid) {
        j++;
        i = j;
        HM = INIT_HM;
        HM[s[j]] = 1;
        HM.size = 1;
        HM.totalCount = 1;
        if (k === 1) {
          HM.valid = 1;
        }
      } else {
        HM.totalCount++;
        HM[nextChar] = 1;
        HM.size++;
        j++;
        if (k === 1) {
          HM.valid++;
          result = Math.max(result, HM.totalCount);
        }
      }
    } else {
      if (HM[nextChar] < k && HM[nextChar] + 1 >= k) HM.valid++;
      HM[nextChar]++;
      HM.totalCount++;
      if (HM.size === HM.valid) result = Math.max(result, HM.totalCount);
      j++;
    }
  }
  return result;
}

let s = "ababbc";
let k = 2;
console.log(longestSubstring(s, k));
