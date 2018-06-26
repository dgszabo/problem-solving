// CAMELCASE STRING ITERATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/camelcase/problem
function camelcase(s) {
    let count = 1;

    for(let i = 0; i < s.length; i++) {
        if(s[i].toLowerCase() && s[i].toLowerCase() !== s[i]) count++;
    }

    return count;
}