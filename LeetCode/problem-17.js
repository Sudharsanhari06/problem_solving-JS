

// problem link: https://leetcode.com/problems/transpose-matrix/

var transpose = function(matrix) {
     let rows=matrix.length;
  let col=matrix[0].length;
  let res=[[]];
  for(let i=0;i<col;i++){
      let r=[];
      for(let j=0;j<rows;j++){
        r.push(0);
      }
      res.push(r);
  }
  
  for(let k=0;k<rows;k++){
      for(let l=0;l<col;l++){
          res[l][k]=matrix[k][l];
      }
  }
  return res;
};