// 1.Write a JavaScript functions to reverse the given number.

function reverseNumber(num){
    let reverse=0;
    while(num>0){
        let re=num%10;
        num=parseInt(num/10);
        reverse=reverse*10+re; 
    }  
    console.log("Reverse Number:",reverse)

}
reverseNumber(1234)

// 2.Write a JavaScript functions to check the give string is palindrome or not.

function palindrome(str){
    let s="";
    for(let i=str.length-1;i>=0;i--){
        s+=str[i];
    }
    if(str==s){
        console.log("It's a Palindrome");
    }else{
        console.log("It's Not a Palindrome");
    }
}

palindrome("madam")

// 3.Write a JavaScript functions that generates all combination of strings.

function allCombination(){
    let arr=[];
    let start='a'.charCodeAt(0);
    let end='z'.charCodeAt(0);

    for(let i=start;i<=end;i++){
        for(let j=start;j<=end;j++){
           let s=String.fromCharCode(i);
            let e=String.fromCharCode(j);
            arr.push(`{ ${s}, ${e}}`)
        }
    }
    console.log("All combination of Strings: ",arr)
}
// allCombination();


// 4.Write a JavaScript function to get the number of occurrences of each letter in Specified String.
function occurrences(str){
    let obj={};
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]]=1
        }
    }
 return obj;
}

console.log("Number of occurrences: ",occurrences("ssample"))

// 5.Write a JavaScript function that accepts a number as a parameter and check the number is prime or not

function prime(num){
    let isprime=true;
    if(num<=0){
        isprime=false
    }else if(num==2|| num==3){
        isprime=true;
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                isprime=false
                break;
            }
        }
    }
    if(isprime){
        return "Its a prime Number "+num;
    }else{
        return "Its Not a prime Number "+num;
    }
}
console.log("prime:",prime(49));




