// GREEDY FLORIST GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/greedy-florist/problem
function getMinimumCost(k, c) {
    c.sort((a,b) => a - b);

    if(k === c.length) {
        return c.reduce((acc, a) => acc + a);
    } else {
        let acc = 0;
        for(let i = 0; i < k; i++) {
            acc += c.pop()
        }

        let multi = 1;
        let skip = Math.ceil(c.length / k);
        let counter = 0;
        while(c.length > counter) {
            for(let i = multi - 1; i < c.length; i += skip) {
                if(c[i]) {
                    acc += (multi + 1) * c[i];
                    counter++;
                }
            }
            multi++;
        }
        
        return acc;
    }
}