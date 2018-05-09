// MODIFIED KAPREKAR NUMBERS ALGORITHM PROBLEM
// HackerRank
function kaprekarNumbers(p, q) {
    let arr = [];
    
    for(let i = p; i <= q; i++) {
        let num = i * i;
        let len = i.toString().length;
        
        let numStr = num.toString();
        if(numStr.length % 2 !== 0) {}
        let first = parseInt(numStr.slice(0, numStr.length - len));
        let second = parseInt(numStr.slice(numStr.length - len));
        if(i === 1) arr.push(1);
        if(second && first + second === i) arr.push(first + second);
    }
    
    return arr.length ? arr : ['INVALID', 'RANGE'];
}