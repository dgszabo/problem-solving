// MAX CONNECTED 2D MATRIX PROBLEM

/*
We have a 2D matrix with each cell having a color. We would like to find out how long is the longest line of cells that have the same color and are connected. Diagonals don't count as connection.

Example: (see also the pic below)
[[1, 1, 3, 3],
 [1, 2, 2, 2],
 [3, 2, 1, 2]]
The solution is 5, because color 2 cells at 2-1, 1-1, 1-2, 1-3, and 2-3 are the longest line of cells of the same color that are connected.

Hint: we are looking for a recursive algorithm to find all the connected cells of the same color for any target cell and an iterative algorithm that iterates through all the cells of the matrix (so we don't miss any cell).

Good luck!

(AFTER YOU COMPLETED THE FUNCTION CHECK FOR A SECOND TASK BELOW!)
*/

// recursive solution
function maxConnected(matrix) {
  let max = 0;
  let seenSet = new Set();

  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(!seenSet.has(`${i}-${j}`)) {
              let connectedSet = getConnectedFileds(matrix, [i,j]);
              for(let val of connectedSet) {
                  seenSet.add(val);
              }
              if(connectedSet.size > max) {
                  max = connectedSet.size;
              }
          }
      }
  }

  return max;
}

function getConnectedFileds(matrix, position = [0,0], color = matrix[position[0]][position[1]], seen = new Set()) {
  // base case of not the right position
  if(seen.has(`${position[0]}-${position[1]}`) || matrix[position[0]][position[1]] !== color) {
      return seen;
  }

  // otherwise add the position to seen
  seen.add(`${position[0]}-${position[1]}`);

  // and call the recursion on the connected squares
  if(matrix[position[0] - 1]) getConnectedFileds(matrix,[position[0] - 1, position[1]], color, seen);
  if(matrix[position[0]][position[1] + 1]) getConnectedFileds(matrix,[position[0], position[1] + 1], color, seen);
  if(matrix[position[0] + 1]) getConnectedFileds(matrix,[position[0] + 1, position[1]], color, seen);
  if(matrix[position[0]][position[1] - 1]) getConnectedFileds(matrix,[position[0], position[1] - 1], color, seen);

  // return the seen set
  return seen;
}

// maxConnected([
//   [1,1,2,3],
//   [1,2,3,2],
//   [3,2,2,2]
// ]);

/*
Uh-oh-au! We tried to run the code above, but with certain inputs we encountered the following error: "RangeError: Maximum call stack size exceeded". This may be because our inputs were rather large 10,000 x 10,000 cell 2D matrices and recursion has an approx. 10-20 thousand iteration limit.

Your task is to rewrite the same function iteratively, so that it would be able to handle our large inputs. (for more info on the original challenge, see Tuesday's post)

Hint: you can simulate an almost limitless call stack by using an array (and pushing elements on it and popping elements off it) and a while loop with some clever logic.

Good luck!
*/

// iterative solution
// not bound by recursion depth limit
function maxConnectedIterative(matrix) {
  let max = 0;
  let seenSet = new Set();

  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(!seenSet.has(`${i}-${j}`)) {
              // create variables add position to them
              let color = matrix[i][j];
              let stack = [[i,j]];
              let connected = new Set();

              // add the neighbours to the stack
              while(stack.length > 0) {
                  let cur = stack.pop();
                  if(!connected.has(`${cur[0]}-${cur[1]}`) && matrix[cur[0], cur[1]] === color) {
                      // add the current position to sets
                      connected.add(`${cur[0]}-${cur[1]}`);
                      seenSet.add(`${cur[0]}-${cur[1]}`);

                      // push the valid neighbours to the stack
                      if(matrix[cur[0] - 1]) {
                          stack.push([cur[0] - 1, cur[1]]);
                      }
                      if(matrix[cur[0]][cur[1] + 1]) {
                          stack.push([cur[0], cur[1] + 1]);
                      }
                      if(matrix[cur[0] + 1]) {
                          stack.push([cur[0] + 1, cur[1]]);
                      }
                      if(matrix[cur[0]][cur[1] - 1]) {
                          stack.push([cur[0], cur[1] - 1]);
                      }
                  }
              }

              // overwrite max if necessarry
              if(connected.size > max) {
                  max = connected.size;
              }
          }
      }
  }

  return max;
}

// maxConnected([
//   [1,1,2,3],
//   [1,2,3,2],
//   [3,2,2,2]
// ]); // 5

// maxConnected([
//   [1,1,2,3],
//   [1,2,3,2],
//   [3,2,2,2],
//   [3,3,2,2]
// ]); // 7