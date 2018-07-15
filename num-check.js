// NUM CHECK STRING ITERATION PROBLEM
function numCheck(str) {
  // remove negative if necessary
  if(str[0] === '-') {
      str = str.slice(1);
  }

  // create numArr and check if it's valid
  let numArr = str.split('.')
  if(numArr.length > 2) return false;

  // loop through the arr and the strings and check if the chars are numbers
  for(let i = 0; i < numArr.length; i++) {
      if(numArr[i] === '') return false;
      for(let j = 0; j < numArr[i].length; j++) {
          if(isNaN(numArr[i][j])) return false;
      }
  }

  // otherwise return true
  return true;
}