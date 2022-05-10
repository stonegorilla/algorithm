function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  let lsorted = quick_sort(left);
  let rsorted = quick_sort(right);

  return [...lsorted, pivot, ...rsorted];
}

console.log(quick_sort([32, 12, 4, 24, 61, 41, 22, 22, 26, 60]));
