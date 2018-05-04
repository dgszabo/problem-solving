/** Leveret lunch count. */

/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */

/* MAIN FUNCTION */
// COUNTING ALL THE CARROTS EATEN
function lunchCount(arr) {
  let cur = findMiddle(arr);
  let sum = 0 + arr[cur[0]][cur[1]];
  let next = [...cur]
  arr[cur[0]][cur[1]] = 0;
  
  next = findNext(arr, cur[0], cur[1]);
  
  while(next) {
      cur = [...next];
      sum += arr[cur[0]][cur[1]];
      arr[cur[0]][cur[1]] = 0;
      next = findNext(arr, cur[0], cur[1]);
  }

  return sum;
}

/* HELPER FUNCTIONS */
// TESTS WHETHER A POSITION EXISTS IN THE ARRAY
function tester(arr, ver, hor) {
  if(!arr[ver]) {
      return 0;
  } else if(!arr[ver][hor]) {
      return 0;
  } else {
      return arr[ver][hor];
  }
}

// FINDS THE NEXT POSITION FOR THE RABBIT
function findNext(arr, ver, hor) {
  if(tester(arr, ver, hor - 1) > 0 && tester(arr, ver, hor - 1) >= tester(arr, ver - 1, hor) && tester(arr, ver, hor - 1) >= tester(arr, ver, hor + 1) && tester(arr, ver, hor - 1) >= tester(arr, ver + 1, hor)) {
      return [ver, hor - 1];
  } else if(tester(arr, ver - 1, hor) > 0 && tester(arr, ver - 1, hor) >= tester(arr, ver, hor + 1) && tester(arr, ver - 1, hor) >= tester(arr, ver + 1, hor)) {
      return [ver - 1, hor];
  } else if(tester(arr, ver, hor + 1) > 0 && tester(arr, ver, hor + 1) >= tester(arr, ver + 1, hor)) {
      return [ver, hor + 1];
  } else if(tester(arr, ver + 1, hor) > 0) {
      return [ver + 1, hor];
  } else {
      return undefined;
  }
}

// FINDS THE INITIAL STARTING POSITION OF THE RABBIT
function findMiddle(arr) {
  if(!Number.isInteger(arr.length / 2) && !Number.isInteger(arr[0].length / 2)) {
      return [Math.floor(arr.length / 2), Math.floor(arr[0].length / 2)];
  } else if(Number.isInteger(arr.length / 2)) {
      if(arr[arr.length / 2 - 1][Math.floor(arr[0].length / 2)] >= arr[arr.length / 2][Math.floor(arr[0].length / 2)]) {
          return [arr.length / 2 - 1, Math.floor(arr[0].length / 2)];
      } else {
          return [arr.length / 2, Math.floor(arr[0].length / 2)];
      }
  } else if(Number.isInteger(arr[0].length / 2)) {
      if(arr[Math.floor(arr.length / 2)][arr[0].length / 2 - 1] >= arr[Math.floor(arr.length / 2)][arr[0].length / 2]) {
          return [Math.floor(arr.length / 2), arr[0].length / 2 - 1];
      } else {
          return [Math.floor(arr.length / 2), arr[0].length / 2];
      }
  } else {
      if(arr[arr.length / 2 - 1][arr[0].length / 2 - 1] > arr[arr.length / 2 - 1][arr[0].length / 2] && arr[arr.length / 2 - 1][arr[0].length / 2 - 1] > arr[arr.length / 2][arr[0].length / 2] && arr[arr.length / 2 - 1][arr[0].length / 2 - 1] > arr[arr.length / 2][arr[0].length / 2 - 1]) {
          return [arr.length / 2 - 1, arr[0].length / 2 - 1];
      } else if(arr[arr.length / 2 - 1][arr[0].length / 2] > arr[arr.length / 2][arr[0].length / 2] && arr[arr.length / 2 - 1][arr[0].length / 2] > arr[arr.length / 2][arr[0].length / 2 - 1]) {
          return [arr.length / 2 - 1, arr[0].length / 2];
      } else if(arr[arr.length / 2][arr[0].length / 2] > arr[arr.length / 2][arr[0].length / 2 - 1]) {
          return [arr.length / 2, arr[0].length / 2];
      } else {
          return arr[arr.length / 2, arr[0].length / 2 - 1]
      }
  }
}

// VALIDATES THE GARDEN
function lunchValidate(garden) {

  // Sanity checks that garden is valid
  const row_lens = garden.map(r => r.length);
  console.assert(
      Math.min.apply(null, row_lens) === Math.max.apply(null, row_lens),
      "Garden is not a matrix!")
  console.assert(
      garden.every(r => (r.every(c => Number.isInteger(c)))),
      "Garden values must be ints!")
}

/** TESTS */

let garden;

garden = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

console.log(lunchCount(garden), "should be 0");

garden = [
  [1, 1, 1],
  [0, 1, 1],
  [9, 1, 9],
];

console.log(lunchCount(garden), "should be 3");

garden = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

console.log(lunchCount(garden), "should be 9");

garden = [
  [9, 9, 9, 9],
  [9, 3, 1, 0],
  [9, 1, 4, 2],
  [9, 9, 1, 0],
];

console.log(lunchCount(garden), "should be 6")


garden = [
    [2, 3, 1, 4, 2, 2, 3],
    [2, 3, 0, 4, 0, 3, 0],
    [1, 7, 0, 2, 1, 2, 3],
    [9, 3, 0, 4, 2, 0, 3],
]

console.log(lunchCount(garden), "should be 15")