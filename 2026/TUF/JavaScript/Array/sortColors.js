// https://leetcode.com/problems/sort-colors/
var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] == 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            mid++;
            low++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }

    }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))