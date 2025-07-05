
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 



// Problem Link:https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

var countPairs = function(nums, k) {
    var count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j] && (i*j)%k==0){
                    count++;
                }
            }
        
    }
    return count;
};

console.log(countPairs(nums = [3,1,2,2,2,1,3], k = 2
))