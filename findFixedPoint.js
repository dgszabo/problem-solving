// FINDFIXEDPOINT BINARY SEARCH PROBLEM
// Rithm School
function findFixedPoint(arr, start = 0, end = arr.length - 1){
    let mid = Math.floor((start + end) / 2)
    if(start === end) return -1;
    if(mid === arr[mid]) return mid;
    if(mid > arr[mid]) {
      return findFixedPoint(arr, mid + 1, end);
    } else {
      return findFixedPoint(arr, start, mid)
    }
}