
// problem link: https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    let curr=0;
    let max=0;
    for(let i=0;i<gain.length;i++){
        let sub=curr+gain[i];
        curr=sub;
        if(max<sub){
            max=sub
        }
    }
    return max;
};