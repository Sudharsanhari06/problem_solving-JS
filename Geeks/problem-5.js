// Given a number n, find the value of n raised to the power of its own reverse.
// Note: The result will always fit into a 32-bit signed integer.

// problem link: https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1

class Solution {
    
    ReverseExponentiation(n) {
        // code here
        let str=String(n).length;
        if(str==1){
            return n**n;
        }else{
         return n;   
        }
    }
    
}