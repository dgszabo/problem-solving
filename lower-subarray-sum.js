// LOWERSUBARRAYSUM SLIDING WINDOW PROBLEM
// Rithm School
function lowerSubArraySum(arr, num){
    if(arr.length === 0) return 0;
  
    let max = 0;
    let left = 0;
    let right = 0;
    let cur = arr[0];
    
    if(cur > max && cur < num) {
        max = cur;
    }	
  
    while(right < arr.length) {
        // stepping functionality
        if(left === right || cur < num) {
            right += 1;
            cur += arr[right];
        }
        else {
          cur -= arr[left];
            left += 1;	
        }
  
        // adjusting max
        if(cur > max && cur < num) {
            max = cur;
        }
    }
    return max;
}