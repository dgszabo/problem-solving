// RUNNING TIME SORT PROBLEM
// HackerRank https://www.hackerrank.com/challenges/runningtime/problem
function runningTime(arr) {
  // keep track of total shifts
  let totalShifts = 0;

  for(let i = 1; i < arr.length; i++) {
      // keep track of insertionIdx and current number of shifts
      let insertionIdx = i;
      let shifts = 0;

      // adjust insertionIdx and current shifts
      while(arr[insertionIdx - 1] && arr[insertionIdx - 1] > arr[i]) {
          insertionIdx--;
          shifts++;
      }

      // if we moved the insertionIdx from the current i, insert + add the shifts to totalShifts
      if(insertionIdx !== i) {
          let removed = arr.splice(i, 1)[0];
          arr.splice(insertionIdx, 0, removed);
          totalShifts += shifts;
      }
  }

  // return totalShifts
  return totalShifts;
}