// NUMPAD RECURSION PROBLEM

/*
Your task is to devise a function that takes a number in string format and returns an array with all the possible combinations of letters as separate strings that can be created pushing the input numbers on a phone keypad. Your function should take (at least) two arguments, a string of N length containing only numbers between 2 and 9 (inclusive) and an object containing an association table that associates the number on a phone keypad with letters of the alphabet.

Examples:
numPad('2', assocTable) // ['a', 'b', 'c']
numPad('96', assocTable) // ["xm", "xn", "xo", "ym", "yn", "yo", "zm", "zn", "zo"]
numPad('234', assocTable) // ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]

// the association table to use
var assocTable = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v', 'w'],
  '9': ['x', 'y', 'z']
}

Hint: you can write the function in several ways, but the most straight forward is writing it recursively. Don't worry about the recursive iteration limit, the input numbers are not going to be long.

Good luck!
*/

// helper method recursion solution
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