// MAX CONNECTED 2D MATRIX PROBLEM
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