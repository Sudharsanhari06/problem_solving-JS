
// problem link : https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    let arr=[];
    for(let i=0;i<image.length;i++){
        let sub=[];
        for(let j=image[i].length-1;j>=0;j--){
            if(image[i][j]==0){
                sub.push(1);
            }else{
                 sub.push(0);
            }
        }
        arr.push(sub);
    }
    return arr;
};