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

// O(n log n) time complexity, but O(n) space complexity
function pairs(k, arr) {
  // create paircount, left and right pointers
  let pairCount = 0;
  let lookingFor = new Set();

  // sort the array to make sure we compare the right elements
  arr.sort((a,b) => a - b);

  // build the lookingFor set and check it each time
  for(let i = 0; i < arr.length; i++) {
      lookingFor.add(arr[i] + k);
      if(lookingFor.has(arr[i])) {
          pairCount++;
      }
  }

  return pairCount;
}