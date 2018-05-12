// MINIMUM DISTANCES FREQENCY COUNTER LIKE PROBLEM
// HackerRank
function minimumDistances(a) {
    let idxStore = {};
    let distances = {};
    
    a.forEach((el, idx) => {
        if(idxStore[el] > -1) {
           if(!distances[el] || distances[el] > idx - idxStore[el]) {
               distances[el] = idx - idxStore[el];
           }
        }
        idxStore[el] = idx;
    });
    
    return Object.values(distances).length > 0 ? Math.min(...Object.values(distances)) : -1;
}
