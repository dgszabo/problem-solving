// CHARACTER FREQUENCY SORT FREQUENCY COUNTER PROBLEM
// O(n log n) time
// O(n) space
function characterFrequencySort(str){
    let count = {}
    for(let i = 0; i < str.length; i++) {
      if(count[str[i]]) count[str[i]]++;
      else count[str[i]] = 1;
    }
    let freqs = Object.values(count).sort((a,b) => a < b);
    let countRev = {};
    for(let key in count) {
      countRev[count[key]] = key;
    }
    let outStr = '';
    for(let j = 0; j < freqs.length; j++) {
      outStr += countRev[freqs[j]].repeat(parseInt(freqs[j]));
    }
    return outStr;
  }