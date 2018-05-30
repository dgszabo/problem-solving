// EQUALIZE ARRAY FREQ COUNTER PROBLEM
// HackerRank
function equalizeArray(arr) {
    let numCount = arr.reduce((acc, x) => {
        if(x in acc) acc[x]++;
        else acc[x] = 1;
        return acc;
    }, {});
    return arr.length - Math.max(...Object.values(numCount));
}