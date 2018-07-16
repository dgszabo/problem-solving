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

// O(1) space complexity
function findDuplicate(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }

    return -1;
}
