// 229. Majority Element II
// Solved
// Medium
// Topics
// Companies
// Hint
// YouTube
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let a = 0;
  let b = 0;
  let aCount = 0;
  let bCount = 0;

  let times = Math.floor(nums.length / 3);
  let res = [];

  for (let val of nums) {
    if (val == a) aCount++;
    else if (val == b) bCount++;
    else if (aCount == 0) {
      a = val;
      aCount++;
    } else if (bCount == 0) {
      b = val;
      bCount++;
    } else {
      aCount--;
      bCount--;
    }
  }

  aCount = 0;
  bCount = 0;

  for (let val of nums) {
    if (val == a) aCount++;
    else if (val == b) bCount++;
  }

  if (aCount > times) res.push(a);
  if (bCount > times) res.push(b);

  return res;
};
