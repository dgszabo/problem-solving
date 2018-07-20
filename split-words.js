// SPLIT WORDS RECURSION PROBLEM
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
