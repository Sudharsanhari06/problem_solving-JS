// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// problem Link: https://leetcode.com/problems/count-common-words-with-one-occurrence/


var countWords = function(words1, words2) {
    
    let obj1={};
    let obj2={};
    for(let i=0;i<words1.length;i++){
        if(obj1[words1[i]]){
            obj1[words1[i]]++;
        }else{
            obj1[words1[i]]=1;
        }
    }
    for(let i=0;i<words2.length;i++){
        if(obj2[words2[i]]){
            obj2[words2[i]]++;
        }else{
            obj2[words2[i]]=1;
        }
    }
    var count=0;
    for(let key in obj1){
        for(let k in obj2){ 
            if(key==k && obj1[key]==1 && obj2[k]==1){
                count++;
            }
        }
    }
    return count;
};