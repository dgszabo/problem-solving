// SELECTION SORT ALGO
function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[minIdx] > arr[j]) {
              minIdx = j;
          }
      }
      if(minIdx !== i) {
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
  }

  return arr;
}