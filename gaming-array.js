// GAMING ARRAY CONSTRUCTIVE ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/an-interesting-game-1/problem
function gamingArray(arr, player = 1) {
    if(arr.length === 0) return player === 1 ? 'ANDY' : 'BOB';
    
    let max = Math.max(...arr);

    return gamingArray(arr.slice(0, arr.indexOf(max)), player === 1 ? 2 : 1);
}