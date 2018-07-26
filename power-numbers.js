// POWER NUMBERS PROBLEM

/*
A power number is an n > 1 number on the m > 1 power. So the 1st power number is 2^2, the second is 2^3 and the third is 3^2. Thus the list of the first power numbers is 4, 8, 9, 16, 25, 27, 36, and so on.

Devise a function that takes an N > 1 integer and returns the Nth power number! This is a pretty complicated task, so don't worry about time and/or space complexity.

Good luck!
*/

function powerNumber(n) {
  // edge case of smaller than 1 n
  if(n < 1) return -1;

  // create variables
  let powerNumbers = new Set();
  let powerArr = [0, 0, 1];

  // build up the powerArr and the powerNumbers set
  while(powerNumbers.size < n) {
      // at each step find the next element of the array
      let tempPowers = [];
      for(let j = 2; j < powerArr.length; j++) {
          tempPowers.push(Math.pow(j, powerArr[j] + 1));
      }
      tempPowers.push(Math.pow(powerArr.length, 2));

      // find the next power and check which number it belongs to
      let nextPower = Math.min(...tempPowers);
      powerNumbers.add(nextPower);

      let inArray = false;
      for(let i = 2; i < powerArr.length; i++) {
          if(nextPower === Math.pow(i, powerArr[i] + 1)) {
              powerArr[i]++;
              inArray = true;
          }
      }

      if(!inArray) {
          powerArr.push(2);
      }
  }

  return Array.from(powerNumbers).pop();
}

// powerNumber(1) // 4
// powerNumber(2) // 8
// powerNumber(3) // 9
// powerNumber(4) // 16
// powerNumber(5) // 25
// powerNumber(6) // 27
// powerNumber(7) // 32
// powerNumber(8) // 36