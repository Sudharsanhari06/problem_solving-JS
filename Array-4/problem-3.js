
// Problem Link:https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.


var maxProductDifference = function(nums) {
    let arr=nums.sort((a,b)=>a-b);
    let sp=arr[0]*arr[1];
    let mp=arr[arr.length-1]*arr[arr.length-2];
    let sub=mp-sp;
    return sub;
};

console.log(maxProductDifference([5,6,2,7,4]));
