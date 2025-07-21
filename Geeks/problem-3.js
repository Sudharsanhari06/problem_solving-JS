
// // problem Link: https://www.geeksforgeeks.org/problems/count-digits5716/1
// Given a positive integer n, count the number of digits in n that divide n evenly (i.e., without leaving a remainder). Return the total number of such digits.

// A digit d of n divides n evenly if the remainder when n is divided by d is 0 (n % d == 0).

class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        var count=0;
        let num=n;
        while(num>0){
            let m=num%10;
            num=parseInt(num/10);
            if(n%m==0){
               count++; 
            }
        }
        return count;
    }
}