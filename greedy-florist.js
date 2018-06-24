// GREEDY FLORIST GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/greedy-florist/problem
function getMinimumCost(k, c) {
    c.sort((a,b) => a - b);

    if(k === c.length) {
        return c.reduce((acc, a) => acc + a);
    } else {
        let acc = 0;
        let multi = 0;
        while(c.length > 0) {
            for(let i = 0; i < k; i++) {
                if(c.length > 0) {
                    acc += (multi + 1) * c.pop();
                }
            }
            multi++;    
        }
        
        return acc;
    }
}
