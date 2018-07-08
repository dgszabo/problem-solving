// FIBONACCI ITERATIVE SOLUTION - ENTIRE ARRAY RETURNED
function fibonacci(n) {
  // edge cases
  if(n < 0) return [];
  if(n === 0) return [0];
  if(n === 1) return [0,1];

  // building up the array of fib numbers
  let arr = [0,1];

  for(let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}