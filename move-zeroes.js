// MOVE ZEROES ARRAY PROBLEM
function moveZeroes(arr) {
  let zeroCounter = 0;

  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
          arr.splice(i, 1);
          zeroCounter++;
          i--;
      }
  }

  for(let i = 0; i < zeroCounter; i++) {
      arr.push(0);
  }

  return arr;
}