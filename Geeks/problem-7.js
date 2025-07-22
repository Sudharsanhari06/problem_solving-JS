// Given a number n, determine whether it is a prime number or not.
// Note: A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.


// problem link: https://www.geeksforgeeks.org/problems/prime-number2314/1

function   isPrime(n) {
        // code here
        if(n==1) return false;
        var flag=true;
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                flag=false;
            }
        }
        return flag
    }
    
console.log(isPrime(1))