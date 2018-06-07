// SNAIL PLUS MATRIX PROBLEM
// Rithm School
function snailPlus(arr) {
    // step counters
    let top = 0;
    let right = arr.length;
    let bottom = arr.length;
    let left = - 1;

    while(bottom > top || left > right) {
        for(let i = left + 1; i < right; i++) {
            if(typeof(arr[top][i]) === 'number') {
                console.log(arr[top][i]);
            }
        }
        right--;

        for(let i = top + 1; i < bottom; i++) {
            if(typeof(arr[i][right]) === 'number') {
                console.log(arr[i][right]);
            }
        }
        bottom--;
        
        for(let i = right - 1; i > left; i--) {
            if(typeof(arr[bottom][i]) === 'number') {
                console.log(arr[bottom][i]);
            }
        }
        left++;

        for(let i = bottom - 1; i > top; i--) {
            if(typeof(arr[i][left]) === 'number') {
                console.log(arr[i][left]);
            }
        }
        top++;
    }
}