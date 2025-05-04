// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// YouTube
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zThIdx = 0;
  let idx = 0;
  let n = nums.length;
  while (idx < n) {
    if (nums[zThIdx] == 0 && nums[idx] != 0) {
      let temp = nums[idx];
      nums[idx] = nums[zThIdx];
      nums[zThIdx] = temp;
      zThIdx++;
    } else if (nums[zThIdx] != 0) {
      zThIdx++;
    }
    idx++;
  }
  return nums;
};
