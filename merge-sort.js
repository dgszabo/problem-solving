// MERGE SORT ALGO
function mergeSort(arr) {
  // base case of only one element
  if(arr.length === 1) {
      return arr;
  }

  // otherwise merge the sorted subarrays
  let midPoint = Math.floor(arr.length / 2);
  return merge(
      mergeSort(arr.slice(0, midPoint)),
      mergeSort(arr.slice(midPoint))
  )
}

// helper function to merge two sorte arrays
function merge(arr1, arr2) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while(leftIdx < arr1.length && rightIdx < arr2.length) {
      if(arr1[leftIdx] <= arr2[rightIdx]) {
          result.push(arr1[leftIdx]);
          leftIdx++;
      } else {
          result.push(arr2[rightIdx]);
          rightIdx++;
      }
  }

  return result.concat(arr1.slice(leftIdx)).concat(arr2.slice(rightIdx));
}