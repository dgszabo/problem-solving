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