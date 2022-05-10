function quick_sort2(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];

  let i = 1;
  let j = arr.length - 1;
  let left = [];
  let right = [];
  while (i <= j) {
    if (arr[i] > pivot && arr[j] <= pivot) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      left.push(arr[i]);
      right.push(arr[j]);
      i++;
      j--;
    } else if (arr[i] <= pivot && arr[j] <= pivot) {
      left.push(arr[i]);
      i++;
    } else if (arr[i] > pivot && arr[j] > pivot) {
      right.push(arr[j]);
      j--;
    } else {
      left.push(arr[i]);
      right.push(arr[j]);
      i++;
      j--;
    }
  }

  let lsorted = quick_sort2(left);
  let rsorted = quick_sort2(right);
  return [...lsorted, pivot, ...rsorted];
}

console.log(quick_sort2([32, 12, 4, 24, 61, 41, 22, 22, 26, 60]));
