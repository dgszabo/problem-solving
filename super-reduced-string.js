// SUPER REDUCED STRING STRING MANIPULATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/reduced-string/problem
function super_reduced_string(s) {
    // create a character count
    let charCount = {};

    for(let i = 0; i < s.length; i++) {
        if(charCount[s[i]]) {
            charCount[s[i]]++;
        } else {
            charCount[s[i]] = 1;
        }
    }

    // get characters that appear odd number of times
    for(let key in charCount) {
        if(charCount[key] % 2 !== 0) {
            delete charCount[key];
        }
    }
    let charsToDelete = Object.keys(charCount);

    // convert sting to array then to Set and then delete charsToDelete
    let charSet = new Set(s.split(''));

    for(let i = 0; i < charsToDelete.length; i++) {
        charSet.delete(charsToDelete[i]);
    }

    // return the set turned into a string
    return Array.from(charSet).length === 0 ? 'Empty String' : Array.from(charSet).join('');
}