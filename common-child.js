// COMMON CHILD ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/common-child/problem
function commonChild(s1, s2) {
    let common = [];
    let s2Counter = 0;
    
    for(let i = 0; i < s1.length; i++) {
        let first = true; 
        for(let j = s2Counter; j < s2.length; j++) {
            if(s1[i] === s2[j] && first) {
                common.push(s1[i]);
                s2Counter = j + 1;
                first = false;
            }
        }
    }

    return common.length;
}
