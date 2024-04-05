function addToMap(map: Map<number, number>, key: number) {
  if (map.has(key)) {
    const count = map.get(key) as number;
    map.set(key, count + 1);
    if (count + 1 == 2) return true;
  } else map.set(key, 1);
  // console.log("map");
  // map.forEach((value, key) => {
  //   console.log(key, value);
  // });
  return false;
}

function deleteFromMap(map: Map<number, number>, key: number) {
  const count = map.get(key) as number;
  if (count === 2) {
    map.set(key, count - 1);
  } else map.delete(key);
  // console.log("map");
  // map.forEach((value, key) => {
  //   console.log(key, value);
  // });
}

function checkMap(map: Map<number, number>) {
  for (let key of map.keys()) {
    if (map.get(key) === 2) {
      return true;
    }
  }
  return false;
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const N = nums.length;
  if (k === 0 || N <= 1) return false;
  const map = new Map<number, number>();
  let i = 0,
    j = Math.min(k, N - 1);
  //init
  for (let num = i; num <= j; num++) {
    if (addToMap(map, nums[num])) return true;
  }
  if (checkMap(map)) return true;
  //begin
  while (j < N - 1) {
    deleteFromMap(map, nums[i]);
    i++;
    j++;
    if (addToMap(map, nums[j])) return true;
  }
  return false;
}

//TESTING
// const nums = [1, 2, 3, 1];
// const k = 3;
const nums = [4, 1, 2, 3, 1, 5];
const k = 3;
console.log(containsNearbyDuplicate(nums, k));
