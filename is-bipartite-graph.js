// IS BIPARTITE GRAPH EVALUATION PROBLEM
function isBipartite(graph) {
  // create vars
  let set1 = new Set();
  let set2 = new Set();
  let seen = new Set();
  let start = Object.keys(graph)[0];

  function helper(start, isFirst = true) {
      // base case
      if(seen.has(start)) {
          return;
      }

      // if statement for the two cases
      if(isFirst) {
          set1.add(start);
          seen.add(start);
          for(let i = 0; i < graph[start].length; i++) {
              set2.add(graph[start][i]);
              helper(graph[start][i], !isFirst);
          }
       } else {
          set2.add(start);
          seen.add(start);
          for(let i = 0; i < graph[start].length; i++) {
              set1.add(graph[start][i]);
              helper(graph[start][i], !isFirst);
          }
      }
  }

  helper(start)

  return checkOverlap(set1, set2)
}

function checkOverlap(set1, set2) {
  let arr1 = Array.from(set1);

  for(let i = 0; i < arr1.length; i++) {
      if(set2.has(arr1[i])) return false;
  }

  return true;
}

// dryer code (if statement and extra variable elliminated)
function isBipartite(graph) {
  // create vars
  let set1 = new Set();
  let set2 = new Set();
  let seen = new Set();
  let start = Object.keys(graph)[0];

  function helper(start, set1, set2) {
      // base case
      if(seen.has(start)) {
          return;
      }

      // adding to the right sets
      set1.add(start);
      seen.add(start);
      for(let i = 0; i < graph[start].length; i++) {
          set2.add(graph[start][i]);
          helper(graph[start][i], set2, set1);
      }
  }

  helper(start, set1, set2);

  return checkOverlap(set1, set2)
}

function checkOverlap(set1, set2) {
  let arr1 = Array.from(set1);

  for(let i = 0; i < arr1.length; i++) {
      if(set2.has(arr1[i])) return false;
  }

  return true;
}

// isBipartite({
//   'A': ['B'],
//   'B': ['A','C','E'],
//   'C': ['B', 'D'],
//   'D': ['C', 'E'],
//   'E': ['B', 'D'],
// }) // true


// isBipartite({
//   'A': ['B'],
//   'B': ['A','C','E'],
//   'C': ['B', 'D'],
//   'D': ['C', 'E', 'B'],
//   'E': ['B', 'D'],
// }) // false