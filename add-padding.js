function addPadding(n, str) {
  // invalid input edge cases -> throw error
      // if n is smaller than str.length
      // if str is just one string
  if(n < str.length) throw 'Invalid input';
  if(str.split(' ').length <= 1) throw 'Invalid input';

  // create variables needed for the transformation
  let wordArr = str.split(' ');
  let positions = wordArr.length - 1;
  let spacesAvailable = n - str.length + positions;
  let extraSpaces = spacesAvailable % positions;
  let evenSpaces = (spacesAvailable - extraSpaces) / positions;

  // add the spaces to the elements of the wordArr
  let outStr = '';
  for(let i = 0; i < wordArr.length; i++) {
      outStr += wordArr[i];

      if(i < wordArr.length - 1) {
          outStr += ' '.repeat(evenSpaces);

          if(extraSpaces > 0) {
              outStr += ' ';
              extraSpaces--;
          }
      }
  }

  return outStr;
}

// addPadding(19, 'hello world today'); // 'hello  world  today'
// addPadding(20, 'hello world today'); // 'hello   world  today'
// addPadding(17, 'hello world today'); // 'hello world today'
// addPadding(16, 'hello world today'); // err: 'Uncaught Invalid input'
// addPadding(19, 'hello'); // err: 'Uncaught Invalid input'
// addPadding(19, ''); // err: 'Uncaught Invalid input'