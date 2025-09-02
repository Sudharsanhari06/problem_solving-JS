
// problem link : https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
     let ans=Array(s.length);
    for(let i=0;i<indices.length;i++){
        ans[indices[i]]=s[i];
    }
    return ans.join('');
    
};