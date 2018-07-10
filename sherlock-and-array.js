// SHERLOCK AND ARRAY SLIDING WINDOW ALGO
// HackerRank https://www.hackerrank.com/challenges/sherlock-and-array/problem
function solve(a){
  // too short array edge case
  if(a.length === 1) return 'YES';
  if(a.length < 3) return 'NO';

  // create left and right sums
  let sumLeft = a[0];
  let sumRight = 0;
  for(let i = 2; i < a.length; i++) {
      sumRight += a[i];
  }

  // move the pivot point and check the sums each time
  for(let i = 1; i < a.length; i++) {
      if(sumLeft === sumRight) {
          return 'YES';
      }

      sumLeft += a[i];
      sumRight -= a[i + 1];
  }

  // otherwise return no
  return 'NO';
}
