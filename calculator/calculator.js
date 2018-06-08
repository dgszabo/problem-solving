// CALCULATOR (Polish notation calculator) STRING PARSING PROBLEM
// Rithm School
function calculator(str) {
    let arr = str.split(' ');
    
    if(isNaN(arr[arr.length - 1])) return false;
    for(let i = 0; i < arr.length - 1; i++) {
        if(i % 2 === 0 && !'+-*/'.includes(arr[i])) return false;
        if(i % 2 !== 0 && isNaN(arr[1])) return false;
    }

    let acc = +arr[arr.length - 1];
    
    for(let j = arr.length - 2; j >= 0; j -= 2) {
        if(arr[j - 1] === '+') acc += +arr[j];
        if(arr[j - 1] === '-') acc -= +arr[j];
        if(arr[j - 1] === '*') acc *= +arr[j];
        if(arr[j - 1] === '/') acc /= +arr[j];
    }

    return acc;
}