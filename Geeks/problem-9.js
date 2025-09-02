

// problem link: https://www.geeksforgeeks.org/problems/palindrome0746/1

class Solution {
    isPalindrome(n) {
        // code here
        let newNum=0;
        let num=n;
        while(num>0){
            let r=num%10;
            num=parseInt(num/10);
            newNum=(newNum*10)+r;
        }
        return newNum==n;
    }
}
