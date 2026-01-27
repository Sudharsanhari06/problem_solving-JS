
// let arr = [1, 5, 8, 3, 10];
// var a = 5;

// let sum = 0;
// for (let key of arr) {
//     if (a < key) {
//         sum += key;
//     }
// }
// console.log(sum)



// Given an array of integers, find the maximum subarray sum
let arr=[1,2,3,4]
var istrue=false;
let sum=0;

for(let i=0;i<arr.length;i++){
 let s=arr[i]+1;  
    if(s===arr[i+1]) {
        istrue=true
           sum+=arr[i]  
    }else{
        istrue=false
        return;
    }
   
}
if(istrue){
console.log(sum)
}else{
    console.log("Not Subarry")
}
