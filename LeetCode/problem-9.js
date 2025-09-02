<<<<<<< HEAD


// problem link: https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
let tar=[];
for(let i=0;i<nums.length;i++){
    tar.splice(index[i], 0, nums[i]);
}
return tar;
=======


// problem link: https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
let tar=[];
for(let i=0;i<nums.length;i++){
    tar.splice(index[i], 0, nums[i]);
}
return tar;
>>>>>>> e2c381d04b4d8344881efcb2da18f3f75fef7346
};