// MAX MIN GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/angry-children/problem
function maxMin(k, arr) {
  // sort arr
  arr.sort((a,b) => a - b);

  // create win of k length
  let win = [];
  for(let i = 0; i < k; i++) {
      win.push(arr[i]);
  }
  let minDiff = Math.max(...win) - Math.min(...win);

  // slide win and check if win is smaller than mindiff at each step
  for(let i = k; i < arr.length; i++) {
      win.shift();
      win.push(arr[i]);

      let tempDiff = Math.max(...win) - Math.min(...win);
      if(tempDiff < minDiff) {
          minDiff = tempDiff;
      }
  }

  return minDiff;
}