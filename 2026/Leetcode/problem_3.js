// 66. Plus One
let digits = [9,9];
var plusOne = function(digits) {
for(let i=digits.length-1;i>=0;i--){
    if((digits[i]+1 )< 10){
        digits[i]++;
        return digits;
    }else{
        digits[i]=0;
    }
}
    digits.unshift(1);
    return digits;
}
console.log(plusOne(digits));
