// TWO ARRAYS ARRAY ITERATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/two-arrays/problem
function twoArrays(k, A, B) {
  // create outArr
  let outArr = [...A];

  // sort arrays
  outArr.sort((a,b) => a - b);
  B.sort((a,b) => b- a);

  // iterate through outArr to add B's elements and filter smaller than k elements
  outArr = outArr.map((el, i) => el + B[i]).filter(el => el < k);

  // return depending if there are elements in the array remaining
  return outArr.length > 0 ? 'NO' : 'YES';
}
