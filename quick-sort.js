// QUICK SORT ALGO
function quickSort(arr, start = 0, end = arr.length) {
  if(start >= end) {
      return arr;
  }

  // put all larger elements to the right and lower to left
  let pivotIdx = end - 1;
  let swapIdx = start;
  let i = start;

  // iterate through the array and adjust the indeces
  while(i < pivotIdx) {
      // swap the swapIdx and i if necessarry
      if(arr[swapIdx] > arr[i] && arr[i] < arr[pivotIdx]) {
          [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
          swapIdx++;
          i = swapIdx;
      // increment i and swapIdx if the pivotIdx is smaller
      } else if(arr[i] < arr[pivotIdx]) {
          swapIdx++;
          i++
      // otherwise step
      } else {
          i++;
      }
  }

  // swap the pivot and the swapIdx if necessary
  if(swapIdx !== pivotIdx) {
      [arr[swapIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[swapIdx]];
  }

  return (quickSort(arr, start, swapIdx) && quickSort(arr, swapIdx + 1, end));
}