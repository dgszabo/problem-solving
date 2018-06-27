// MAX CONTINUOUS SUBARRAY MULTIPLE POINTER PROBLEM
// Interview challenge from glassdoor
function maxContinuousSubarray(arr) {
    let start = 0;
    let end = 0;
    let max = [0, 0];
    
    while(end < arr.length) {
        if(start === end) {
            end++;
        } else if(arr[end - 1] && arr[end - 1] <= arr[end]) {
            end++;
        } else {
            start = end;
        }

        if(max[1] - max[0] < end - start) {
            max = [start, end];
        }
    }

    return arr.slice(max[0], max[1]);
}