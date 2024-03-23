/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverseNums = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}
var rotate = function(nums, k) {
    k = k % nums.length;

    nums.reverse()
    reverseNums(nums, 0, k - 1)
    reverseNums(nums, k, nums.length - 1)
};