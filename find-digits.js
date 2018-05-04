// FIND DIGITS DATA TYPE MUTATION PROBLEM
// HackerRank
function findDigits(n) {
    let arr = n.toString().split('');
    
    return arr.reduce((sum, el) => {
        if(el !== '0' && n % parseInt(el) === 0) {
            return ++sum;
        } else {
            return sum;
        }
    }, 0)
}