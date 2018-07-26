// SPLIT WORDS RECURSION PROBLEM

/*
You are given a string that consists of concatenated words without spaces. You are also given a dictionary of words in array format. Using the dictionary of words you have to return an array of strings containing all the possible ways of splitting the input string so that you use all the letters in the string and all the words in the output strings are valid words in the dictionary.

Example:
splitWords('catsanddogs', ['cat', 'cats', 'sand', 'and', 'dog', 'dogs']);
// should return -> ["cats and dogs" ,"cat sand dogs" ]

Hint: this is a fairly difficult recursive problem, so first try to devise how you would check if the first part of the input string is a valid word according to the dictionary and if it is, how (with what input you would recurse).

Good luck!
*/

function splitWords(str, dict) {
  let results = [];

  function helper(str, curArr = []) {
      if(str.length === 0) {
          results.push(curArr.join(' '));
          return;
      }

      for(let i = 1; i <= str.length; i++) {
          if(dict.includes(str.slice(0, i))) {
              helper(str.slice(i), curArr.concat(str.slice(0, i)));
          }
      }
  }

  helper(str);

  return results;
}

// splitWords('catsanddogs', ['cat', 'cats', 'sand', 'and', 'dog', 'dogs']);
// return -> ["cats and dogs" ,"cat sand dogs" ]
