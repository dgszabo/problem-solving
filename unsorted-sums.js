// UNSORTED SUMS ARRAY PROBLEM
function unsortedSums(arr, sum) {
  let results = [];

  for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] + arr[j] === sum) {
              results.push([arr[i], arr[j]].sort((a,b) => a - b));
          }
      }
  }

  return results;
}