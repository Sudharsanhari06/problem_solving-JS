// Problem Link: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/*Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words. */


var mostWordsFound = function(sentences) {
    let max=0;
    for(let i=0;i<sentences.length;i++){
        let str=sentences[i].split(" ");
        let len=str.length;
        if(max<len){
            max=len;
        }   
    }

    return max;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

