// CALCULATOR (Polish notation calculator) STRING PARSING PROBLEM
// Rithm School

/*
In Polish notation the operator follows the operand. Read more about the Polish reverse notation here: https://en.wikipedia.org/wiki/Reverse_Polish_notation.

Your task is to create a calculator that takes a string of space separated numbers and operators in Polish notation and returns the result of the operation at the end. Regretably the input may not be clean so you may have to validate it.

Example:
the "+ 9 * 2 3" input should return 15
the "- 9 * 2 3" input should return 3
the "/ 6 - 4 2" input should return 3
the "* 2 + 1 2" input should return 6

Good luck!
*/

function calculator(str) {
    let arr = str.split(' ');

    if(isNaN(arr[arr.length - 1])) return false;
    for(let i = 0; i < arr.length - 1; i++) {
        if(i % 2 === 0 && !'+-*/'.includes(arr[i])) return false;
        if(i % 2 !== 0 && isNaN(arr[1])) return false;
    }

    let acc = +arr[arr.length - 1];

    for(let j = arr.length - 2; j >= 0; j -= 2) {
        if(arr[j - 1] === '+') acc = +arr[j] + acc;
        if(arr[j - 1] === '-') acc = +arr[j] - acc;
        if(arr[j - 1] === '*') acc = +arr[j] * acc;
        if(arr[j - 1] === '/') acc = +arr[j] / acc;
    }

    return acc;
}