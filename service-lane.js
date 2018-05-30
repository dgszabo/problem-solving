// SERVICE LANE ARRAY ITERATION PROBLEM
// HackerRank
function serviceLane(n, cases, wid) {
    return cases.map(c => {
        let maxW = wid[c[0]];
        for(let i = c[0]; i <= c[1]; i++) {
            if(maxW > wid[i]) maxW = wid[i];
        }
        return maxW;
    });
}