// ISODDWITHOUTMODULO PROBLEM
// HackReactor
function isOddWithoutModulo(num) {
    return modulo(num, 2) !== 0 ? true : false;
  }
  
  function modulo(num1, num2) {
    if(isNaN(num1) || isNaN(num2) || num2 === 0) {
      return NaN;
    } else {
      let absNum1 = Math.abs(num1);
      let absNum2 = Math.abs(num2);
      while(absNum1 > 0) {
        absNum1 -= absNum2;
      }
      if(absNum1 === 0) {
        return absNum1;
      } else {
        if(num1 < 0) {
          return -(absNum1 + absNum2);
        }
        return absNum1 + absNum2;
      }
    }
  }