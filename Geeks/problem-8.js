// You are given a 3-digit number n, Find whether it is an Armstrong number or not.

// An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 33 + 73 + 13 = 371. 

// problem link: https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1
function armstrongNumber(n) {
        // code here
        let c=String(n).length;
        let sum=0;
        while(n>0){
            let num=n%10;
            n=parseInt(n/10);
            sum+=num**c;
        }
        return sum;
    }
console.log(armstrongNumber(153))