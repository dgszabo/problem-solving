// MAX PRODUCT SUBARRAY ARRAY ITERATION PROBLEM
// Rithm School
// O(n2) runtime solution
function maxProductSubarray(arr){
    let max = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let prod = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            prod *= arr[j];
            if(prod > max) max = prod;
        }
        if(prod > max) max = prod;
    }
  
    return max;
}

// O(n) runtime solution
function maxProductSubarray(arr){
    let start = 0;
    let end = 0;
    let cur = arr[0];
    let max = cur;
  
    while(end < arr.length) {
        if(start === end || (end < arr.length - 1 && arr[end] !== 0)) {
            end++;
            if(arr[end] !== undefined) cur *= arr[end];
        } else if(arr[start] === 0) {
            start++;
            cur = arr[start];
        } else {
            cur /= arr[start];
            start++;
        }
        if(cur > max) max = cur;
    }
    return max;
  }