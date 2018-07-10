// ICE CREAM PARLOR ARRAY ITERATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/icecream-parlor/problem
function icecreamParlor(m, arr) {
  for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] + arr[j] === m) {
              return [i + 1,j + 1];
          }
      }
  }
  return false;
}
