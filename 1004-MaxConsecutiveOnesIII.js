// 1004. Max Consecutive Ones III
// Solved
// Medium
// Topics
// Companies
// Hint
// YouTube
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let startPtr = 0;
  let endPtr = 0;
  let res = 0;

  while (endPtr < nums.length) {
    if (!nums[endPtr]) k--;
    while (k < 0) {
      if (nums[startPtr] == 0) {
        k++;
      }
      startPtr++;
    }
    res = Math.max(res, endPtr - startPtr + 1);
    endPtr++;
  }
  return res;
};
