// problem link : https://www.geeksforgeeks.org/problems/perfect-numbers3207/1

function isPerfect(n) {
        // code here
     let div=parseInt(n/2);
     let sum=0;
     for(let i=1;i<=div;i++){
         if(n%i==0){
             sum+=i;
         }
     }
     return n==sum;
     
    }
console.log(isPerfect(15))