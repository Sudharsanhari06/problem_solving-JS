// Calculate Electricity Bill
let bill=300;
let am=0;
if(bill<=100){
    am=bill*10;
}
else if(bill <=200){
    am = (100 *10) + ((bill - 100) * 15);
}else if(bill<=300){
    am=(100*10)+(100*15)+((bill-200)*20)
}else{
    am=(100*10)+(100*15)+(100*20)+((bill-300)*25)
}
console.log(am);


