

// Problem Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/1687204256/

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 


let sentence = "thequickbrownfoxjumpsoverthelazydog";
let obj={};
for(let i=0;i<sentence.length;i++){
    if(obj[sentence[i]]){
        obj[sentence[i]]++;
    }else{
        obj[sentence[i]]=1
    }
}
console.log(obj)
const objectKeys = Object.keys(obj);

console.log(objectKeys.length);