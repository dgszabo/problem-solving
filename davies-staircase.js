// DAVIES STAIRCASE PROBLEM
// TABULATION
function solution(num) {
    let arr = [0, 1, 2, 4];
    
    if(num < 4) return arr[num];
    
    for(let i = 4; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    
    return arr[num];
}

// MEMOIZATION
function solution(num, arr = [0, 1, 2, 4]) {
    if(num < 4 || arr[num]) return arr[num];
    return arr[num] = solution(num - 1, arr) + solution(num - 2, arr) + solution(num - 3, arr);
}
