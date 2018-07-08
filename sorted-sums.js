// SORTED SUMS ARRAY ITERATION PROBLEM
function sortedSums(arr, sum) {
  let left = 0;
  let right = arr.length - 1;
  let results = [];

  while(left < right) {
      if(arr[left] + arr[right] < sum) {
          left++;
      } else if(arr[left] + arr[right] > sum) {
          right--;
      } else {
          results.push([arr[left], arr[right]]);
          left++;
      }
  }

  return results;
}