// O(n) runtime, but O(n) space complexity
function findDuplicate(arr) {
    let seen = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(!seen.has(arr[i])) {
            seen.add(arr[i]);
        } else {
            return arr[i];
        }
    }

    return -1;
}