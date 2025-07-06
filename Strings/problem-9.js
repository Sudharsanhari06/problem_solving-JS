
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// You must perform an operation shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with the result of the shift(s[i-1], s[i]) operation.
// // Problem Link: https://leetcode.com/problems/replace-all-digits-with-characters/description/


let s = "a1c1e1"

var replaceDigits = function(s) {
   let str='';
     for(let i=0;i<s.length;i++){
        if(s[i]>=0 && s[i]<=9){
        let as=s.charCodeAt(i-1);
        let ch=String.fromCharCode(as+Number(s[i]));
        str+=ch;
        }else{
        str+=s[i]
        }
    }
    return str;
};

console.log(replaceDigits(s));