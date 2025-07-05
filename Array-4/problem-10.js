// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.





// Problem Link:https://leetcode.com/problems/truncate-sentence/description/

let s = "What is the solution to this problem";
let k = 4

var truncateSentence = function(s, k) {
    let arr=s.split(' ');
    let str=''
    for(let i=0;i<k;i++){
        if(k-1==i){
            str+=arr[i];
        }else{
              str+=arr[i]+" "; 
        }
     
    }
    return str;
};
console.log(truncateSentence(s,k));
