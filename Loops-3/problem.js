// 1.Write a JavaScript program that accept two integers and display the larger one.
function largeOfTwo(num1,num2){
    let ans;
    if(num1<num2){
        ans=num2;
    }else{
        ans=num1
    }
    return 'larger of Two Numbers: '+ans;
}
//console.log(largeOfTwo(5,2));


// 2.Write a JavaScript conditional statement to find the sign of entered three numbers.
function signNumber(num1,num2,num3){
    let product=num1*num2*num3;
    if(product>0){
        console.log("The sign is positive +");
    }else if(product<0){
        console.log("The sign is Negative -");
    }else{
        console.log("The sign is Zero")
    }
}
signNumber(3,-7,2)


//3.Write a JavaScript Program that will iterate from 0 – 10. For every iteration it will check the number odd or even.
function oddOrEven(){
    for(let i=0;i<=10;i++){
        if(i%2!=0){
            console.log(i+"  is odd..");
        }else{
            console.log(i+"  is even..");

        }
    }
}
// oddOrEven();

// 4.Write a JavaScript program that will print If the day is Sunday result will be 1. Like it should print for all day.

function printDay(day){
    let obj={1:'sunday',2:'monday',3:'tuesday',4:'wednesday',5:'thursday',6:'friday',7:'saturday'}
    for(let key in obj){
        if(day.toLowerCase()==obj[key]){
            console.log("day: ",key);
            break;
        }
    }
}
printDay("friday");


// 5.Write a JavaScript program to find the Armstrong numbers
function ArmstrongNumber(num){
    let count=num.toString().length;
    let sum=0;
    while(num>0){
        let n=num%10;
        num=parseInt(num/10);
        let p=n**count;
        sum=sum+p;
    }
    console.log("Armstrong Number: ",sum);
}
// ArmstrongNumber(153);

