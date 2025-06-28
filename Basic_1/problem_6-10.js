// 6.Write a JavaScript program to find the browser window size.
// const browserwidth=window.innerWidth;
// console.log("browserwidth",browserwidth);





// 7.Write a JavaScript program to find the entered year is leap year or not.
const year = (year) => {
    let ans;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                ans = "This is Leap year";
            }
            else {
                ans = "This is not Leap Year";
            }
        }
        else {
            ans = "This is Leap year";
        }
    } else {
        ans = "This is not leap year.";
    }
    console.log(ans)
}
year(2020);


// 8.Write a JavaScript program to check two given numbers, whether one is positive and another one is negative.
function positiveNegative(num) {
    if (num > 0) {
        console.log("The Number is positive");
    }
    else if (num == 0) {
        console.log("The Number is Negative");
    }
    else {
        console.log("The Number is Nagative");
    }
}
positiveNegative(6);

// 9.Write a JavaScript program to find the odd and even numbers between 1-100.
function findOddAndEven(){
    let arr1=[];
    let arr2=[];
    for(let i=1;i<=100;i++){
        if(i%2!=0){
            arr1.push(i);
        }else{
            arr2.push(i);
        }
    }
    console.log("Odd Numbers: ",arr1);
    console.log("Even Numbers: ",arr2);
}
findOddAndEven()
// 10.Write a JavaScript program to find the given number is power of 2.
function power(num){
let pow=num**2;
console.log("Power of Two: ",pow)
}
power(4);

