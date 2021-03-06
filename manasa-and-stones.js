// MANASA AND STONES DYNAMIC PROGRAMING PROBLEM
// HackerRank https://www.hackerrank.com/challenges/manasa-and-stones/problem
function stones(n, a, b) {
    let countSet = new Set()
    let arr = [a, b];
    
    function helper(n, arr, memo = [0]) {
        if(memo.length === n) {
            countSet.add(memo[memo.length - 1]);
            return;
        }
        for(let i = 0; i < arr.length; i++) {
            let tempMemo = [...memo]
            tempMemo.push(memo[memo.length - 1] + arr[i]);
            helper(n, arr, tempMemo);
        }
    }

    helper(n, arr);
    
    return countSet;
}

// O(n) time complexity solution
function stones(n, a, b) {
    let countSet = new Set()
    
    for(let i = 0; i < n; i++) {
        countSet.add(i * Math.max(a,b) + (n - i - 1) * Math.min(a,b));
    }
    
    return Array.from(countSet);
}