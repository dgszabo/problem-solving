// O(n) runtime, but O(n) space complexity
function findDuplicate(arr) {
    let seen = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(!seen.has(arr[i])) {
            seen.add(arr[i]);
        } else {
            return arr[i];
        }
    }

    return -1;
}

// O(1) space complexity
function findDuplicate(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }

    return -1;
}

// O(1) space complexity
// N + 1 length array; all elements between 1 and N (inclusive)
// better than O(n2) time complexity
function findDuplicate(arr, lowBound = 1, highBound = arr.length - 1) {
  // base case for lowBound === highBound (found the duplicate)
  if(lowBound === highBound) {
      return lowBound;
  }

  // assign midPoint and check if the duplicate is above it
  let midPoint = Math.floor((lowBound + highBound) / 2);
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] > midPoint && arr[i] <= highBound) count++;
  }

  // depending on whether the count indicates that the duplicate is above midPoint recurse up or down
  if(count >= (highBound - lowBound + 1.5) / 2) {
      return findDuplicate(arr, midPoint + 1, highBound);
  } else {
      return findDuplicate(arr, lowBound, midPoint);
  }
}
