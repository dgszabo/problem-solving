// PAIRS ARRAY ITERATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/pairs/problem
// O(n2) time
function pairs(k, arr) {
  let pairCount = 0;

  for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] - arr[j] === k) {
              pairCount++;
          } else if(arr[j] - arr[i] === k) {
              pairCount++;
          }
      }
  }

  return pairCount;
}