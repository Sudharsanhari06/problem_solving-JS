// Given two positive integers a and b, find GCD of a and b.

// Note: Don't use the inbuilt gcd function

// problem LInk: https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1

class Solution {
    gcd(a, b) {
        // code here
        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp
        }
        return a;
    }
}