// MAX PRODUCT OF SUBARRAY MULTIPLE POINTERS PROBLEM
// Interview challenge from glassdoor
function maxProductSubarray(arr) {
    let start = 0;
    let end = 0;
    let curProd = arr[end];
    let subArrInd = [start, end];
    let maxProd = arr[end];

    while(end < arr.length) {
        if(start === end && (arr[start + 1] === 0)) {
            start = 0;
            for(let i = end + 1; i < arr.length; i++) {
                if(start === 0 && arr[i] !== 0) {
                    start = i;
                    end = i;
                    curProd = arr[end];
                }
            }
        } else if(start === end && start === arr.length - 1) {
            end++;
        } else if(arr[end + 1] === 0 || end === arr.length - 1) {
            curProd /= arr[start];
            start++;
        } else {
            end++;
            if(arr[end] && arr[end] !== 0) {
                curProd *= arr[end];
            }
        }

        if(curProd > maxProd) {
            maxProd = curProd;
            subArrInd = [start, end];
        }
    }
    return arr.slice(subArrInd[0], subArrInd[1] + 1);
}