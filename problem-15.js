

// problem link:https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function(mat) {

let sum=0;
let n=mat.length;
  for(let i=0;i<mat.length;i++){
    sum+=mat[i][i];
    sum+=mat[i][(mat.length-1)-i]
  }  
  if(n%2==1){
      sum-=mat[Math.floor(n/2)][Math.floor(n/2)]
  }
  return sum;

};

