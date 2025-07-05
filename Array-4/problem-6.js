// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
/*
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.*/


var arrayStringsAreEqual = function(word1, word2) {
    let str1=word1.join('');
    let str2=word2.join('');
    console.log(str2);
    if(str1==str2){
        return true;
    }else{
        return false;
    }
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
