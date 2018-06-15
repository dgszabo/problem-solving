// GROUP ANAGRAMS ARRAY-STR PROBLEM
// Rithm School
// O(n) space (multiple times n)
// 0(n2) time
function groupAnagrams(arr){
    let sortedWords = [...arr];
    
    sortedWords = sortedWords.map(el => {
        return el.split('').sort().join('')
    })
  
    let addedEls = new Set()
    let outArr = []
    for(let i = 0; i < arr.length; i++) {
        let tempArr = [];
        let sorted = sortedWords[i];
  
      if(!addedEls.has(arr[i])) {
          for(let j = 0; j < arr.length; j++) {
              if(sortedWords[j] === sorted) {
                  addedEls.add(arr[j]);
                  tempArr.push(arr[j]);
              }
          }
      }	
  
        if(tempArr.length !== 0) outArr.push(tempArr);
    }
    return outArr
}