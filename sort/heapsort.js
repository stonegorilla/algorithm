function heap_sort(arr) {
  let heaparr = [];

  for (let i = 0; i < arr.length; i++) {
    heaparr.push(arr[i]);
    let k = i;
    while (k > 0) {
      if (heaparr[k] > heaparr[Math.ceil(k / 2) - 1]) {
        let temp = heaparr[k];
        heaparr[k] = heaparr[Math.ceil(k / 2) - 1];
        heaparr[Math.ceil(k / 2) - 1] = temp;
        k = Math.ceil(k / 2) - 1;
      } else {
        break;
      }
    }
  }

  for (let i = heaparr.length - 1; i >= 0; i--) {
    let temp = heaparr[0];
    heaparr[0] = heaparr[i];
    heaparr[i] = temp;

    let k = 0;
    while (2 * k + 1 < i) {
      if (2 * k + 2 === i) {
        if (heaparr[k] >= heaparr[2 * k + 1]) break;
        else {
          let temp = heaparr[k];
          heaparr[k] = heaparr[2 * k + 1];
          heaparr[2 * k + 1] = temp;
          k = 2 * k + 1;
        }
      } else {
        if (
          heaparr[k] >= heaparr[2 * k + 1] &&
          heaparr[k] >= heaparr[2 * k + 2]
        ) {
          break;
        } else if (
          heaparr[2 * k + 1] > heaparr[k] &&
          heaparr[2 * k + 1] >= heaparr[2 * k + 2]
        ) {
          let temp = heaparr[k];
          heaparr[k] = heaparr[2 * k + 1];
          heaparr[2 * k + 1] = temp;
          k = 2 * k + 1;
        } else {
          let temp = heaparr[k];
          heaparr[k] = heaparr[2 * k + 2];
          heaparr[2 * k + 2] = temp;
          k = 2 * k + 2;
        }
      }
    }
  }
  return heaparr;
}

console.log(heap_sort([7, 6, 5, 8, 3, 5, 9, 1, 6]));
console.log(heap_sort([10, 4, 8, 5, 12, 2, 6, 11, 3, 9, 7, 1]));
