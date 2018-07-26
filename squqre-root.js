// SQUARE ROOT BINARY SEARCH PROBLEM

/*
Everybody can calculate the square root of a number using Math.sqrt(). Your task is to implement a square root function that takes in a number (integer or float) and returns it's square root with certain pre-determined precision.

Hint: Think of a binary search-like algorithm that continues until it finds a number that approximates the squre root of the number with the predetermined precision.

Good luck!
*/

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
