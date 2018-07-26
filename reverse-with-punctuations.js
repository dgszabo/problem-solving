// REVERSE WITH PUNCTUATIONS STRING MANIPULATION PROBLEM

/*
You get a sentence and you need to return the elements in reverse order. But some of the words will have either a comma or a period after them. Devise a function that reverses the words in the sentence, but keeps the punctuations in the same position (after the nth word) as they were in the original input string. For example, 'hello world.' should return 'world hello.' You can assume only one punctuation after each word and no invalid inputs.

Test case:
The 'hello world, this is, a great day.' input should return 'day great, a is, this world hello.'

Good luck!
*/

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