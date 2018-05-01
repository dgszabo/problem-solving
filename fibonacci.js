// SIMPLE RECURSION
function fibonacci(n, arr = [0, 1]) {
    if(n < 2) {
        return arr[n]
    }
    return fibonacci(n - 1, arr) + fibonacci(n - 2, arr)
}

// DYNAMIC PROGRAMING
// memoization
function fibonacci(n, arr = [0, 1]) {
    if(n < 2) {
        return arr[n]
    }
    arr[n] = arr[n-1] || fibonacci(n - 1, arr) + arr[n-2] || fibonacci(n - 2, arr)
    return arr[n]
}

// tabulation
function fibonacci(n, arr = [0, 1]) {
    if(n < 2) {
        return arr[n]
    }
    for(let i = 2; i <= n; i++) {
        let temp = arr[1];
        arr[1] = arr[0] + arr[1];
        arr[0] = temp;
    }
    return arr[1];
}