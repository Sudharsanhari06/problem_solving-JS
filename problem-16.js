

// problem link : https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let c = 0;
        while (num > 0) {
            num = parseInt(num / 10);
            c++;
        }
        if (c%2==0) {
            ans++;
        }
    }
    return ans;
};