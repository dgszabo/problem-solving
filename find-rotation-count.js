// FINDROTATIONCOUNT DIVIDE AND COUNQUER STYLE PROBLEM
// Rithm School
// Restriction: O(log n) time complexity
function findRotationCount(arr, start = 0, end = arr.length - 1, comp){
    if(!comp && arr.length > 0) comp = arr[0];
  
    if(start === end + 1) return 0;
  
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] < comp) {
      if(arr[mid - 1] > arr[mid]) return mid;
      else return findRotationCount(arr, start, mid - 1, comp);
    } else {
      return findRotationCount(arr, mid + 1, end, comp)
    }
}