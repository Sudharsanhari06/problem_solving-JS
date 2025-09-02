
// problem link :https://www.geeksforgeeks.org/problems/third-largest-element/1

class Solution {
    thirdLargest(arr) {
        // your code here
       if(arr.length>=3){
        let s=arr.sort((a,b)=>b-a);
        return s[2]; 
        }else{
            return -1;
        }
    }
}