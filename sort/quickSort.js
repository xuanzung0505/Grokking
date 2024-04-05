const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let pivot = arr[mid];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != mid) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([0, 8, 1, 7, 2, 5, 3, 4]));
