// SHERLOCK AND THE VALID STRING
// HackerRank https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
    let letterCount = {};
    
    for(let i = 0; i < s.length; i++) {
        if(letterCount[s[i]]) {
            letterCount[s[i]]++;
        } else {
            letterCount[s[i]] = 1;
        }
    }
    
    let letterValues = Object.values(letterCount).sort((a, b) => a - b);
    if(Math.abs(letterValues[0]) - Math.abs(letterValues[1]) < -1 || Math.abs(letterValues[letterValues.length - 2]) - Math.abs(letterValues[letterValues.length - 1]) < -1) return 'NO';
        
    if(letterValues[0] !== letterValues[1]) {
        letterValues.shift();  
    } else {
        letterValues.pop();
    }
    return letterValues.every(el => el === letterValues[0]) ? 'YES' : 'NO';
}