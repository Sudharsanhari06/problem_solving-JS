
// Problem Link: https://leetcode.com/problems/shuffle-string/description/

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];

var restoreString = function(s, indices) {
    let arr=s.split('');
    console.log(arr)
    let n=[];
      for(let i=0;i<indices.length;i++){
         n[indices[i]]=arr[i];
      }
      return n.join('');
  };

console.log(restoreString(s,indices));