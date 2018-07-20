// NUMPAD RECURSION PROBLEM
function numPad(numStr, assocTable) {
  let results = [];

  function helper(numStr, wordStr = '') {
      if(numStr.length === 0) {
          results.push(wordStr);
          return;
      }

      for(let i = 0; i < assocTable[numStr[0]].length; i++) {
          helper(numStr.slice(1), wordStr + assocTable[numStr[0]][i]);
      }
  }

  helper(numStr);

  return results;
}

// numPad('234', {
//   '2': ['a', 'b', 'c'],
//   '3': ['d', 'e', 'f'],
//   '4': ['g', 'h', 'i'],
//   '5': ['j', 'k', 'l'],
//   '6': ['m', 'n', 'o'],
//   '7': ['p', 'q', 'r', 's'],
//   '8': ['t', 'u', 'v', 'w'],
//   '9': ['x', 'y', 'z']
// })