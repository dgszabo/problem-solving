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