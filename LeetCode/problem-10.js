


// problem LInk :https://leetcode.com/problems/check-if-the-sentence-is-pangram/
var checkIfPangram = function (sentence) {
    let obj = {};
    for (let i = 0; i < sentence.length; i++) {
        if (obj[sentence[i]]) {
            obj[sentence[i]]++
        } else {
            obj[sentence[i]] = 1;
        }
    }
    return Object.keys(obj).length == 26;

};


// we can implemnt thi is set

var checkIfPangram = function (sentence) {
    let s = new Set();
    sentence=sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i]>='a' && sentence[i]<='z'){
            s.add(sentence[i]);
        }
    }
    return s.size==26;
};


