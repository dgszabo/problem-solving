// VALID PARENTHESES DATA STRUCTURE PROBLEM
// Utilizing an array as  stack
function validParens(str) {
    if(str.length === 0) {
        return true;
    }
    if(str.length % 2 !== 0) {
        return false;
    }
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        if(Object.values(pairs).includes(str[i])) {
            arr.push(str[i]);
        } else {
            if(pairs[str[i]] !== arr.pop()) {
                return false;
            }
        }
    }

    return arr.length === 0;
}

validParens("")  // true
validParens("()")  // true
validParens("()[]{}")  // true
validParens("(]")  // false
validParens("([)]")  // false
validParens("{[]}")  // true