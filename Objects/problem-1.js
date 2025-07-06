
//1.Write a JavaScript program to list the properties of JS Object.

const student={
    name:"sudharsan",
    age:19,
    role:"QA Automation Testing"
}

for(let key in student){
    console.log(key);
}

let keys=Object.keys(student);
console.log("Key",keys);

let value=Object.values(student);
console.log("Value",value);

