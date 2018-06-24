// FIBONACCI MODIFIED DYNAMIC PROGRAMMING PROBLEM
// HackerRank https://www.hackerrank.com/challenges/fibonacci-modified/problem
function fibonacciModified(t1, t2, n) {
    function helper(arr, n) {
        if(n === 1 || n === 2) return arr[n];
        arr[n] = helper(arr, n - 2) + helper(arr, n - 1) * helper(arr, n - 1);
        return arr[n];
    }

    return helper([0, t1, t2], n);
}