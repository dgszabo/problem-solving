// TWO SUM ARRAY ITERATION PROBLEM
// LeetCode https://leetcode.com/problems/two-sum
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};