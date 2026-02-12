let arr= [2,6,5,8,11]; 
let target = 14;
let  n = 5;
let ans=[];
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(target==arr[i]+arr[j]){
            ans.push(i,j)
        }
    }
}
console.log(ans)