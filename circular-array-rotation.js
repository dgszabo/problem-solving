// CIRCULAR ARRAY ROTATION ARRAY MANIPULATION EXERCISE
// HackerRank https://www.hackerrank.com/challenges/circular-array-rotation/problem
function circularArrayRotation(a, k, m) {
    let outArr = []

    let newArr = []
    a.forEach((el, idx) => {
        if(idx + (k % a.length) >= a.length) {
            newArr[idx + (k % a.length) - a.length] = a[idx];
        } else {
            newArr[idx + (k % a.length)] = a[idx];
        }
    });

    m.forEach(el => {
       outArr.push(newArr[el]);
    });

    return outArr;
}

circularArrayRotation([1, 2, 3], 2, [0, 1, 2])
