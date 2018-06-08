// INARRAY ARRAY COMPARISON AND SORT PROBLEM
// Rithm School
function inArray(a1, a2){
    let outSet = new Set;
    for(let el1 of a1) {
      for(let el2 of a2) { 
        for(let i = 0; i < el2.length; i++) {
          if(el1 === el2.slice(i, i + el1.length)) outSet.add(el1);
        }
      }
    }
    return Array.from(outSet).sort((a, b) => a > b);
  }
  