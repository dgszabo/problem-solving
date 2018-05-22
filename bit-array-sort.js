//  BIT ARRAY SORT ARRAY MANIPULATION PROBLEM
// O(n) time
// O(1) space
function bitArraySort(arr) {
    let first = 0;
    let second = 0;
  
    while(second < arr.length) {
        if(first === second) {
            second++;
        } else if(arr[first] === 1 && arr[second] === 0) {
            let temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
        } else if(arr[first] === 0) {
            first++;
        } else if(arr[second] === 1) {
            second++;
        }
    }
  
    return arr;
  }