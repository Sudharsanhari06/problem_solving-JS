
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).


// problem solving :https://leetcode.com/problems/running-sum-of-1d-array/


var runningSum = function(nums) {
    let newArr=[];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        newArr.push(sum)
    }
    return newArr;
};
