// 2.Write a JavaScript program to delete a property from the Object.


const student={
    name:"sudharsan",
    age:19,
    role:"QA Automation Testing"
}

delete student.age;
delete student['name'];
console.log("student",student)