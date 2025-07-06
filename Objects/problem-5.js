// Write a JavaScript program to check the object contain given property.

let student={
    name:"sudharsan",
    age:19,
    role:"QA Automation Testing"
}

let p="age";
if(p in student){
    console.log(`${p} is present in student object`);
}else{
    console.log(`${p} is not present in student object`);

}



