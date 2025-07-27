
// problem link : https://leetcode.com/problems/count-items-matching-a-rule/
var countMatches = function (items, ruleKey, ruleValue) {
    var count = 0;
    for (let i = 0; i < items.length; i++) {
        let each = items[i];
        let index;
        if (ruleKey == "type") {
            index = 0;
        } else if (ruleKey == "color") {
            index = 1;
        } else if (ruleKey == "name") {
            index = 2;
        }
        console.log("index", index)
        if (items[i][index] == ruleValue) {
            count++;
        }
    }
    return count;
};