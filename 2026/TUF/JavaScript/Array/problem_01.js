let arr=[1,2,4,5,6];

let max=0;
for(let i of arr){
    if(max<i){
        max=i;
    }
}
console.log(max);