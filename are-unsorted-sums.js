// ARE UNSORTED SUMS ARRAY PROBLEM
// O(n) time complexity
// O(n) space complexity
function areUnsortedSums(arr, sum) {
  let seen = new Set();

  for(let i = 0; i < arr.length - 1; i++) {
      if(seen.has(sum - arr[i])) {
          return true;
      } else {
          seen.add(arr[i]);
      }
  }

  return false;
}
