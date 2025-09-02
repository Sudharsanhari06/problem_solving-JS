

// problem link: https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
let tar=[];
for(let i=0;i<nums.length;i++){
    tar.splice(index[i], 0, nums[i]);
}
return tar;
};