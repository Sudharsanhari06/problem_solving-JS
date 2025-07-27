
// problem LInk: https://leetcode.com/problems/shuffle-the-array/submissions/1709965085/
var shuffle = function(nums, n) {
    let ans=[];
    for(let i=0;i<n;i++){
        ans.push(nums[i],nums[n+i]);
    }
    return ans;
};