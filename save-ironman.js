// SAVE IRONMAN STR PROBLEM
// GeeksForGeeks https://practice.geeksforgeeks.org/problems/save-ironman/0
function saveIronman(str, leftIdx = 0, rightIdx = str.length - 1) {
  // base case of passing pointers
  if(leftIdx >= rightIdx) {
      return true;
  }

  // fail base case
  if(str[leftIdx] !== str[rightIdx]) {
      return false;
  }

  return saveIronman(str, leftIdx + 1, rightIdx - 1);
}