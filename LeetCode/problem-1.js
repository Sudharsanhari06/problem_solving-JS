// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
// problem LInk: https://leetcode.com/problems/build-array-from-permutation/
var buildArray = function(nums) {
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        newArr.push(nums[nums[i]]);
    }
    return newArr;
};