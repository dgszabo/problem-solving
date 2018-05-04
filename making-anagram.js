// MAKING ANAGRAM FREQUENCY COUNTER PROBLEM
// HackerRank
function makeAnagram(a, b) {
    let storeA = {};
    let storeB = {};
    
    a.split('').forEach(el => {
       if(storeA[el]) {
           storeA[el]++;
       } else {
           storeA[el] = 1;
       }
    });
    
    b.split('').forEach(el => {
       if(storeB[el]) {
           storeB[el]++;
       } else {
           storeB[el] = 1;
       }
    });
    
    for(key in storeA) {
        if(storeB[key]) {
            while(storeB[key] > 0 && storeA[key] > 0) {
                storeA[key]--;
                storeB[key]--;
            }
        }
    }
    
    return Object.values(storeA).reduce((sum, a) => { return sum + a }, 0) + Object.values(storeB).reduce((sum, a) => { return sum + a }, 0)
}