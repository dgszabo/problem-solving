// MAKING ANAGRAMS FREQ COUNTER PROBLEM
// HackerRank https://www.hackerrank.com/challenges/making-anagrams/problem
function makingAnagrams(s1, s2) {
  // freq counter for s1
  let freq = {}
  for(let i = 0; i < s1.length; i++) {
      if(freq[s1[i]]) {
          freq[s1[i]]++;
      } else {
          freq[s1[i]] = 1;
      }
  }

  // freq counter subtract for s2
  for(let i = 0; i < s2.length; i++) {
      if(freq[s2[i]]) {
          freq[s2[i]]--;
      } else {
          freq[s2[i]] = -1;
      }
  }

  // count how many chars have to be removed
  let changesNeeded = 0;

  for(let key in freq) {
      if(freq[key] < 0) {
          changesNeeded -= freq[key];
      } else if(freq[key] > 0) {
          changesNeeded += freq[key];
      }
  }

  return changesNeeded;
}
