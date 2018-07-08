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

// in-place swapping solution
function moveZeroes(arr) {
  let zeroes = 0;

  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) zeroes++;
  }

  for(let i = 0; i < arr.length - zeroes; i++) {
      if(arr[i] === 0) {
          let swapIdx = i;
          while(arr[swapIdx] === 0 && swapIdx < arr.length - 1) {
              swapIdx++;
          }
          if(arr[swapIdx] !== 0) {
              [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
          }
      }
  }

  return arr;
}