
// problem link: https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

class Solution {
    getMinMax(arr) {
        // code here
        let min=arr[0];
        let max=arr[0];
        for(let i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
            }else if(min>arr[i]){
                min=arr[i];
            }
        }
        let res=[];
        res.push(min,max);

return res;



    }
}