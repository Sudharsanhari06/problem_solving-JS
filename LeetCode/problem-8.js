
// problem Link : https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function(nums) {
    let res=[];
    for(let i=0;i<nums.length;i++){
        let item=nums[i];
        let c=0;
        for(let j=0;j<nums.length;j++){
            if(item>nums[j]){
                c++
            }
        }
        res.push(c);
    }  
    return res;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))