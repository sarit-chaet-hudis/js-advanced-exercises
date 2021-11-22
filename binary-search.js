function binSearch(arr, x, start = 0, stop = arr.length) {
  let mid = Math.floor((stop - start) / 2 + start);
  if (stop <= start) {
    return -1;
  }
  if (arr[mid] === x) {
    return mid;
  }
  if (arr[mid] < x) {
    // middle is smaller than x, move start index left forward
    return binSearch(arr, x, mid + 1, stop);
  }
  if (arr[mid] > x) {
    // middle is larger than x, move right index backwards
    return binSearch(arr, x, start, mid);
  }
}

const arr1 = [1, 2, 4, 6, 8, 10, 56, 57, 90, 120, 122];

console.log(binSearch(arr1, 123));
