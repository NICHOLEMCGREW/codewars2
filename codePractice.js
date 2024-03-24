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

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let r = 0; r < matrix.length; r++) {
        for(let c = r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }

    for (let row of matrix) {
        row.reverse()
    }
};