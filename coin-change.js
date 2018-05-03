// COIN CHANGE PROBLEM
// WITH TABULATION
function coinChange(n, coins) {
    arr = Array.from({length: n + 1}).map(el => 0);
    arr[0] = 1;

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j < arr.length; j++) {
            arr[j] += arr[j - coins[i]];
        }
    }

    return arr[n];
}
