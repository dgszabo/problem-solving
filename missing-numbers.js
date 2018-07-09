// MISSING NUMBERS FREQ COUNTER
// HackerRank https://www.hackerrank.com/challenges/missing-numbers/problem
function missingNumbers(arr, brr) {
  // create freq counter
  let allNumbers = new Set(arr.concat(brr));
  let freqs = {};
  Array.from(allNumbers).forEach(el => {
      freqs[el] = 0;
  });

  // add the freq counts from arr
  for(let i = 0; i < arr.length; i++) {
      freqs[arr[i]]++;
  }

  // subtract the frea counts from brr
  for(let i = 0; i < brr.length; i++) {
      freqs[brr[i]]--;
  }

  let outArr = [];
  for(let key in freqs) {
      if(freqs[key] !== 0) {
          outArr.push(key);
      }
  }

  return outArr;
}