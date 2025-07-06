// 3.Write a JavaScript program to sort an array of JS Objec
let arr=[
    {
        name:"sudharsan",
        age:19,
        role:"QA Automation Testing"
    },
    {
        name:"chandru",
        age:18,
        role:"QA Automation Testing"
    }
]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i].agearr[j].age){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

// arr.sort((a,b)=>a.age-b.age);

console.log(arr);