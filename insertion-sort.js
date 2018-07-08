// INSERTION SORT ALGO
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
      let j = i;
      while(arr[j - 1] && arr[j - 1] > arr[i]) {
          j--;
      }
      // splice out/in if necessarry
      if(arr[j] > arr[i]) {
          let targetEl = arr.splice(i, 1)[0];
          arr.splice(j, 0, targetEl);
      }
  }

  return arr;
}