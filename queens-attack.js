// QUEENS ATTACK MATRIX ITERATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/queens-attack-2/problem
function queensAttack(n, k, r_q, c_q, obstacles) {
    // init board
    let board = [];
    for(let i = 0; i < n; i++) {
        board.push(Array.apply(null, Array(n)).map(el => true));    
    }
    // add queen and obstacles
    board[r_q - 1][c_q - 1] = 'Q';
    for(let i = 0; i < obstacles.length; i++) {
        board[obstacles[i][0] - 1][obstacles[i][1] - 1] = false;
    }

    // init count with queen's pos
    let count = 0;

    // count step in each direction
    let cur = [r_q - 1, c_q - 1];
    // up
    while(cur[0] - 1 >= 0 && board[cur[0] - 1][cur[1]]) {
        count++;
        cur[0]--;
    }
    // up right
    cur = [r_q - 1, c_q - 1]
    while(cur[0] - 1 >= 0 && cur[1] + 1 < n && board[cur[0] - 1][cur[1] + 1]) {
        count++;
        cur[0]--;
        cur[1]++;
    }
    // right
    cur = [r_q - 1, c_q - 1]
    while(cur[1] + 1 < n && board[cur[0]][cur[1] + 1]) {
        count++;
        cur[1]++;
    }
    // down right
    cur = [r_q - 1, c_q - 1]
    while(cur[0] + 1 < n && cur[1] + 1 < n && board[cur[0] + 1][cur[1] + 1]) {
        count++;
        cur[0]++;
        cur[1]++;
    }
    // down
    cur = [r_q - 1, c_q - 1]
    while(cur[0] + 1 < n && board[cur[0] + 1][cur[1]]) {
        count++;
        cur[0]++;
    }
    // down left
    cur = [r_q - 1, c_q - 1]
    while(cur[0] + 1 < n && cur[1] - 1 >= 0 && board[cur[0] + 1][cur[1] - 1]) {
        count++;
        cur[0]++;
        cur[1]--;
    }
    // left
    cur = [r_q - 1, c_q - 1]
    while(cur[1] - 1 >= 0 && board[cur[0]][cur[1] - 1]) {
        count++;
        cur[1]--;
    }
    // up left
    cur = [r_q - 1, c_q - 1]
    while(cur[0] - 1 >= 0 && cur[1] - 1 >= 0 && board[cur[0] - 1][cur[1] - 1]) {
        count++;
        cur[0]--;
        cur[1]--;
    }

    // return the count
    return count
}