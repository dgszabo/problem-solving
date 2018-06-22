// FAIR RATIONS ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/fair-rations/problem
function fairRations(B) {
    let count = 0;

    for(let i = 0; i < B.length; i++) {
        if(B[i] % 2 !== 0) {
            B[i] += 1;
            if(!B[i + 1]) return 'NO';
            B[i + 1] += 1;
            count++;
        }
    }

    return count * 2;
}