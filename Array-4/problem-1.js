// Problem Link: https://leetcode.com/problems/concatenation-of-array/

//Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

var getConcatenation = function(nums) {
    let ans=[...nums,...nums];
    return ans;
};

console.log(getConcatenation([1,2,1]))