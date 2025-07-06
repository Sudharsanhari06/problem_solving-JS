// 1.Write a JavaScript program to find the Square a number using arrow function.

let squareFunction=(a)=>a**2;
console.log(squareFunction(5));




// 2.Write a JavaScript program to find the sum and difference for given 2 number using arrow function with one line execution.
let sumAndDiff=(a,b)=>({sum:a+b,difference:a-b});
console.log(sumAndDiff(2,1))



// 3.Write a JavaScript program to find sum of the array using arrow function with one line execution. Let arr = [1,2,3,4,5,]
let arr = [1,2,3,4,5];
let sumOfArray=arr.reduce((a,b)=>a+b,0);
console.log(sumOfArray)