// FIND INDEXES ARRAY ITERATION PROBLEM
function findIndexes(input, target) {
  let output = [];
  let leftIdx = 0;
  let rightIdx = input.length - 1;

  while(rightIdx > leftIdx) {
      if(input[leftIdx] + input[rightIdx] === target) {
          output.push([leftIdx, rightIdx]);
          leftIdx++;
          rightIdx--;
      } else if(input[leftIdx] + input[rightIdx] < target) {
          leftIdx++;
      } else {
          rightIdx--;
      }
  }

  return output;
}
