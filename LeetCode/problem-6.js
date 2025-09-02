

// problem Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
    let max=0;
    for(let i=0;i<candies.length;i++){
        if(max<candies[i]){
            max=candies[i];
        }
    }   
    let res=[];
    for(let j=0;j<candies.length;j++){
        let sum=candies[j]+extraCandies;
        if(max<=sum){
            res.push(true);
        }else{
            res.push(false);
        }
    }
    return res;
};
console.log(kidsWithCandies([2,3,5,1,3],3))
