
//find the second largest Number

// let arr=[1,6,5];  edge cases for the second largest number 
let arr=[1,2,3,4,5,6];

let max=arr[0];  //6
let min=0; //1

for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
        min=max;
        max=arr[i];
    }else if(arr[i]>min && arr[i]!=max) {
        min=arr[i]
    }
}
console.log(min)
console.log(max)



