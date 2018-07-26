// FLOOD CROSSING (HIGHEST FLOOD LEVEL) 2D MATRIX PROBLEM

/*
Given an N x M size 2D matrix (array of arrays) with integers at each position representing the height of the cell, devise a function that returns the highest flood level at which it's possible to cross from the left side of the matrix to the right side of the matrix. A larger or equal flood level renders the cell unusable for crossing (so you cannot use a 4 high cell at flood level 4 or higher). You can move up-down, sideways, and also diagonally.

Example:
[ [4,3,3,2,8],
  [7,4,3,12,4],
  [9,2,17,3,4],
  [5,16,3,11,7] ] // Crossing possible until flood level 7
// From left to right you can cross via 9 -> 16 -> 17 -> 12 -> 8 at flood level 7, but flood level 8 would render the last cell unusable.

Hint: you can do this both recursively and iteratively (simulating a stack with an array). This can turn out to be many lines of code, so break it into multiple functions if necessary.

Good luck!
*/

function highestFlood(matrix) {
  for(let i = 0; i < Infinity; i++) {
      if(!floodCrossingPossible(matrix, i)) {
          if(i === 0) {
              return 'Crossing not possible!'
          } else {
              return `Crossing possible until flood level ${i - 1}`;
          }
      }
  }
}

function floodCrossingPossible(matrix, floodLevel = 0) {
  // create possible starting points and end points
  let starts = new Set();
  let ends = new Set();
  for(let i = 0; i < matrix.length; i++) {
      if(matrix[i][0] > floodLevel) {
          starts.add(i);
      }
      if(matrix[i][matrix[i].length - 1] > floodLevel) {
          ends.add(i);
      }
  }

  // stop the code if there are no starts or ends
  if(starts.size === 0 || ends.size === 0) {
      return false;
  }

  // create seen set (add all lower than flood level cells to it), stack
  let seen = new Set();
  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(matrix[i][j] <= floodLevel) {
              seen.add(`${i}-${j}`);
          }
      }
  }
  let stack = [];

  // iterate through the starts set
  for(let row of starts) {
      // if we haven't seen this start oord, add it to the set and push it to the stack
      if(!seen.has(row)) {
          seen.add(`${row}-0`);
          stack.push([row, 0]);

          // start a while loop to check if we can reach the other shore from this start row
          while(stack.length > 0) {
              // pop the last coord of stack and add it to seen
              let pos = stack.pop();
              seen.add(`${pos[0]}-${pos[1]}`);

              // steps for above and next to
              if(matrix[pos[0] - 1]) {
                  if(!seen.has(`${pos[0] - 1}-${pos[1]}`)) {
                     stack.push([pos[0] - 1, pos[1]]);
                  }
                  if(matrix[pos[0] - 1][pos[1] - 1]) {
                      if(!seen.has(`${pos[0] - 1}-${pos[1] - 1}`)) {
                          stack.push([pos[0] - 1, pos[1] - 1]);
                      }
                      if(!seen.has(`${pos[0]}-${pos[1] - 1}`)) {
                          stack.push([pos[0], pos[1] - 1]);
                      }
                  }
                  if(matrix[pos[0] - 1][pos[1] + 1]) {
                      if(!seen.has(`${pos[0] - 1}-${pos[1] + 1}`)) {
                          stack.push([pos[0] - 1, pos[1] + 1]);
                      }
                      if(!seen.has(`${pos[0]}-${pos[1] + 1}`)) {
                          stack.push([pos[0], pos[1] + 1]);
                      }
                  }
              }

              // steps for below
              if(matrix[pos[0] + 1]) {
                  if(!seen.has(`${pos[0] + 1}-${pos[1]}`)) {
                     stack.push([pos[0] + 1, pos[1]]);
                  }
                  if(matrix[pos[0] + 1][pos[1] - 1]) {
                      if(!seen.has(`${pos[0] + 1}-${pos[1] - 1}`)) {
                          stack.push([pos[0] + 1, pos[1] - 1]);
                      }
                  }
                  if(matrix[pos[0] + 1][pos[1] + 1]) {
                      if(!seen.has(`${pos[0] + 1}-${pos[1] + 1}`)) {
                          stack.push([pos[0] + 1, pos[1] + 1]);
                      }
                  }
              }

              // check if we reached the other shore
              for(let endCoord of ends) {
                  if(seen.has(`${endCoord}-${matrix[0].length - 1}`)) {
                      return true;
                  }
              }
          }
      }
  }

  return false;
}

// floodCrossingPossible([
//     [4,3,3,2,8],
//     [7,4,3,12,4],
//     [9,2,17,3,4],
//     [8,16,3,11,7]
// ], 8) // false

// floodCrossingPossible([
//     [4,3,3,2,8],
//     [7,4,3,12,4],
//     [9,2,17,3,4],
//     [8,16,3,11,7]
// ], 7) // true

// highestFlood([
//   [4,3,3,2,8],
//   [7,4,3,12,4],
//   [9,2,17,3,4],
//   [8,16,3,11,7]
// ]) // Crossing possible until flood level 7