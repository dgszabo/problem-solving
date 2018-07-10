// MAXIMUM SUM ARRAY MANIPULATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/maximum-subarray-sum/problem
// O(n2) time complexity
function maximumSum(a, m) {
  let max = 0;

  // try all possible sum combinations
  for(let i = 0; i < a.length; i++) {
      let sum = 0;
      for(let j = i; j < a.length; j++) {
          sum += a[j];

          // check every time if this sum % is larger than the max
          if(sum % m > max) {
              max = sum % m;
          }
      }
  }

  return max;
}