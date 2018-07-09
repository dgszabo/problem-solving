// FIND MEDIAN SORTING PROBLEM
// HackerRank https://www.hackerrank.com/challenges/find-the-median/problem
function findMedian(arr) {
  arr.sort((a,b) => a - b);

  return arr[Math.floor(arr.length /2)];
}
