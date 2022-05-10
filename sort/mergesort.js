function merge_sort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let mergearray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergearray.push(left.shift());
    } else {
      mergearray.push(right.shift());
    }
  }

  return [...mergearray, ...left, ...right];
}

console.log(merge_sort([3, 9, 2, 14, 5, 17, 22, 21, 4, 5]));
console.log(merge_sort([3, 2]));
merge([1, 2, 7, 9], [3, 6, 8, 12]);
