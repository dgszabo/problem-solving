// PRIYANKA AND TOYS GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/priyanka-and-toys/problem
function toys(w) {
    w.sort((a,b) => a - b)
    
    let count = 1;
    let anchor = w[0];
    
    for(let i = 0; i < w.length; i++) {
        if(w[i] > anchor + 4) {
            anchor = w[i];
            count++;
        }
    }
    
    return count;
}