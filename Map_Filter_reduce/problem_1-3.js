// 1.Write a JavaScript program to sum of every positive element given array using filter and reduce. 
let arr = [1, -4,5, -3,6,7];
let op=arr.filter((n)=>n>0).reduce((a,b)=>a+b,0);
console.log(op)

// 2.Write a JavaScript program to calculate the median and mean using the sort and reduce // 
let arr2 = [12,46,32,64]
let op2=arr2.sort((a,b)=>a-b).reduce((a,b)=>a+b,0)/arr2.length;
console.log(op2)

// 3.Write a JavaScript program to get an initial letter from each word from the sentence using map.
let input = "George Raymond Richard Martin";

let str=input.split(' ');

let op3=str.map((item)=>item[0]);
console.log(op3) 








