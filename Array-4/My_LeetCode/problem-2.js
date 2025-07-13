// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Problem Link: https://leetcode.com/problems/rotate-array/description/

var rotate = function (nums, k) {
    k = k % nums.length;
    let sub = nums.length - k;
    for (let j = 0; j < sub; j++) {
        let b = nums.shift();
        nums.push(b);
    }
    return nums;
};