// CHECK SUDOKU 2D MATRIX PROBLEM
function checkSudoku(matrix) {
  // go through the matrix and return false if invalid
  // check rows and columns
  for(let i = 0; i < matrix.length; i++) {
      if(!checkHor(matrix, i)) {
          return false;
      }
      if(!checkVer(matrix, i)) {
          return false;
      }
  }

  // check 3 x 3 windows
  for(let i = 0; i < matrix.length; i += 3) {
      for(let j = 0; j < matrix[i].length; j += 3) {
          if(!checkWin(matrix, i, j)) {
              return false;
          }
      }
  }

  // return true if valid
  return true;
}

function checkHor(matrix, row) {
  let seen = new Set();

  for(let i = 0; i < matrix[row].length; i++) {
      if(seen.has(matrix[row][i])) {
          return false;
      } else {
          seen.add(matrix[row][i]);
      }
  }

  return true;
}

function checkVer(matrix, col) {
  let seen = new Set();

  for(let i = 0; i < matrix.length; i++) {
      if(seen.has(matrix[i][col])) {
          return false;
      } else {
          seen.add(matrix[i][col]);
      }
  }

  return true;
}

function checkWin(matrix, row, col) {
  let seen = new Set();

  for(let i = row; i < row + 3; i++) {
      for(let j = col; j < col + 3; j++) {
          if(seen.has(matrix[i][j])) {
              return false;
          } else {
              seen.add(matrix[i][j]);
          }
      }
  }

  return true;
}


// var inputMatrix = [[5,3,4,6,7,8,9,1,2],
//                  [6,7,2,1,9,5,3,4,8],
//                  [1,9,8,3,4,2,5,6,7],
//                  [8,5,9,7,6,1,4,2,3],
//                  [4,2,6,8,5,3,7,9,1],
//                  [7,1,3,9,2,4,8,5,6],
//                  [9,6,1,5,3,7,2,8,4],
//                  [2,8,7,4,1,9,6,3,5],
//                  [3,4,5,2,8,6,1,7,9]];

// checkSudoku(inputMatrix) // true