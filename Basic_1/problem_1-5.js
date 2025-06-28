// 1.Write a JavaScript program to display the current day and time in any format.
let d=new Date();
console.log("Day ",d.getDay()+1);
console.log("Time ",d.toLocaleTimeString());


//2.Write a JavaScript program to get current date.
let current=new Date();
let date=current.toISOString().split('T')[0];
let re=date.split('-');
str="";
for(let i=re.length-1;i>=0;i--){
    str+=re[i]+"/"
}
let ans=str.slice(0,str.length-1)
console.log("Current Date:",ans);

// 3.Write a JavaScript program to return the sum of two numbers.
let num1=5;
let num2=3;
console.log("Sum:",num1+num2);

//4.Write a JavaScript program to find the aria of triangle.
let base=3;
let height=4;
let formula=1/2*base*height;
console.log("Area of triangle:",formula);

// 5.Write a JavaScript program to calculate multiplication and division of two numbers.
function mulAndDiv(num1,num2){
    let mul=num1*num2;
    let div=num1/num2;
    console.log("Multiplication:",mul);
    console.log("Division: ",div)
}
mulAndDiv(2,2);




