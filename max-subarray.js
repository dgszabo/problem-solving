// MAX SUBARRAY
// HackerRank https://www.hackerrank.com/challenges/maxsubarray/problem
function maxSubarray(arr) {
  // get max non-consequtive sub array sum
  let nonConsSum;
  if(arr.filter(el => el > 0).length > 0) {
      nonConsSum = arr.reduce((acc,el) => {
          if(el > 0) acc += el;
          return acc;
      });
  } else {
      nonConsSum = Math.max(...arr);
  }


  // get max sum of consequtive subarray
  let consSum;
  for(let i = 0; i < arr.length; i++) {
      let tempSum;
      for(let j = i; j < arr.length; j++) {
          if(!tempSum) {
              tempSum = arr[j];
          } else {
              tempSum += arr[j];
          }

          if(!consSum || tempSum > consSum) {
              consSum = tempSum;
          }
      }
  }

  return [consSum, nonConsSum];
}