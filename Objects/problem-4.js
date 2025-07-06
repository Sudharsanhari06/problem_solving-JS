// console.log(Object.getOwnPropertyNames(Array.prototype));


// .Write a JavaScript program to retrieve all the values of object properties

let student={
    name:"sudharsan",
    age:19,
    role:"QA Automation Testing"
}
let value=Object.values(student);
console.log(value)
