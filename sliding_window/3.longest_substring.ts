function lengthOfLongestSubstring(s: string): number {
  const hashMap: { [key: string]: number | undefined; size: number } = {
    size: 0,
  };

  if (s.length === 0) return 0;
  let i = 0,
    j = 0;
  hashMap[s[j]] = 1;
  hashMap.size = 1;
  let result = 1;

  //check if next char exists
  while (j + 1 < s.length) {
    const nextChar = s[j + 1];
    if (hashMap[nextChar] !== undefined) {
      //if exists then shrink until i==j or i++ j++
      if (i === j) {
        i++;
        j++;
      } else {
        hashMap[s[i]] = undefined;
        hashMap.size--;
        i++;
      }
    } else {
      //else grow and update result
      hashMap[nextChar] = 1;
      hashMap.size++;
      j++;
      result = result < hashMap.size ? hashMap.size : result;
    }
  }
  return result;
}

let s = "aab";
console.log(lengthOfLongestSubstring(s));
