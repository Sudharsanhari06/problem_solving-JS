
// problem Link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

 

var check = function (nums) {
        let count=0;
        for(let i=0;i<nums.length;i++){
            let curr=nums[i];
            let next=nums[(i+1)%nums.length];
            if(curr>next){
                count++;
            }
        }
        return count<=1;
};
