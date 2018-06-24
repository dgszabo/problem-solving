// CANDIES DYNAMIC PROGRAMMING PROBLEM
// HackerRank https://www.hackerrank.com/challenges/candies/problem
function candies(n, arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let candiesArr = Array.apply(null, Array(arr.length)).map((el) => 1);

    for(let j = min + 1; j <= max; j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i - 1] && arr[i] > arr[i - 1] && candiesArr[i] <= candiesArr[i - 1]) {
                candiesArr[i]++;
            }
            if(arr[i + 1] && arr[i] > arr[i + 1] && candiesArr[i] <= candiesArr[i + 1]) {
                candiesArr[i]++;
            }
        }
    }

    return candiesArr.reduce((sum, a) => sum + a, 0);
}
