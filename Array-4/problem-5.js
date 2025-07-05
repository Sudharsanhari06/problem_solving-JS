//Problem Link: https://leetcode.com/problems/count-items-matching-a-rule/description/


// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.

let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
let ruleKey = "type";
let ruleValue = "phone";
var countMatches = function(items, ruleKey, ruleValue) {
    var count=0;
   for(let i=0;i<items.length;i++){
     let arr=items[i]
     if(ruleKey=='color'){
     if(arr[1]==ruleValue){
         count++;
             }
         }
         
     else if(ruleKey=='type'){
         if(arr[0]==ruleValue){
             count++
         }
     }    
     else if(ruleKey=='name'){
         if(arr[2]==ruleValue){
             count++;
         } 
     }
   }  
   return count;
 };

 
console.log(countMatches(items, ruleKey, ruleValue))