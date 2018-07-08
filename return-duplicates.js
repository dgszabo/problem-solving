// RETURN DUPLICATES ARRAY ITERATION PROBLEM
function returnDuplicates(arr) {
  // create seen and duplicates sets
  let seen = new Set();
  let duplicates = new Set();

  for(let i = 0; i < arr.length; i++) {
      if(!seen.has(arr[i])) {
          seen.add(arr[i]);
      } else {
          duplicates.add(arr[i]);
      }
  }

  return Array.from(duplicates).sort((a,b) => a - b).join(' ');
}