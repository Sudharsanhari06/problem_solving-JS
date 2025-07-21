
// problem LInk: https://www.geeksforgeeks.org/problems/reverse-digit0316/1

// You are given an integer n. Your task is to reverse the digits, ensuring that the reversed number has no leading zeroes.

class Solution {
    reverseDigits(n) {
        // code here
        let sum=0;
        let num=n;
        while(num>0){
            let m=num%10;
            num=parseInt(num/10);
            sum=(sum*10)+m;
        }
        return sum;
    }
}
