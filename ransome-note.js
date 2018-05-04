// RANSOME NOTE FREQUENCY COUNTER PROBLEM
function ransomeNote(r, m) {
    let store = {};
    
    r.forEach(el => {
        if(store[el]) {
            store[el]++;
        } else {
            store[el] = 1;
        }
    });
    
    m.forEach(el => {
        if(store[el]) {
            store[el]--;
        } else {
            return 'No';
        }
    });
    
    return Object.values(store).filter(el => el > 0).length > 0 ? 'No' : 'Yes';
}
