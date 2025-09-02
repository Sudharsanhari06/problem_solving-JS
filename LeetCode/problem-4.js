// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// problem link: https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts){
    let sum;
    var max=0;
    for(let i=0;i<accounts.length;i++){
         sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j];
        }
        if(max<sum){
            max=sum;
        }
    }
    return max;
};