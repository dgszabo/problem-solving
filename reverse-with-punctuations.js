// REVERSE WITH PUNCTUATIONS STRING MANIPULATION PROBLEM
function reverseWithPunctuation(str) {
  // create an array of the str and variables to keep track of punctuations
  let arr = str.split(' ');
  let commas = new Set();
  let dots = new Set();

  // go over the words and get the punctuations
  for(let i = 0; i < arr.length; i++) {
      if(arr[i][arr[i].length - 1] === '.') {
          dots.add(i);
          arr[i] = arr[i].slice(0, -1);
      } else if(arr[i][arr[i].length - 1] === ',') {
          commas.add(i);
          arr[i] = arr[i].slice(0, -1);
      }
  }

  // reverse the array elements and add back the punctuations
  let outStr = '';

  for(let i = 0; i < arr.length; i++) {
      outStr += arr[arr.length - 1 - i];
      if(dots.has(i)) {
          outStr += '.';
      }
      if(commas.has(i)) {
          outStr += ',';
      }
      if(i < arr.length - 1) {
          outStr += ' ';
      }
  }

  return outStr;
}

reverseWithPunctuation('hello world, this is, a great day.') // 'day great, a is, this world hello.'