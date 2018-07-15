// SQUARE ROOT BINARY SEARCH PROBLEM
function getSqrt(num, prec = 1, low = 0, high = num) {
  // negative number edge case
  if(num < 0) return -1;

  // create variables
  let approx = (high + low) / 2;
  let square = approx * approx;

  // base case of finding the sqrt
  if(Math.abs(num - square) < prec) {
      return approx;
  }

  // recurse if sqrt not found
  if(square > num) {
      return getSqrt(num, prec, low, approx);
  } else {
      return getSqrt(num, prec, approx, high);
  }
}
