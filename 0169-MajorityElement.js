// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Time O(n) Space O(1)
  let a = 0;
  let aCount = 0;

  for (let val of nums) {
    if (val == a) aCount++;
    else if (aCount == 0) a = val;
    else aCount--;
  }
  return a;

  // Time O(n) Space O(n)
  // let map = new Map()
  // let n = nums.length-1;
  // let times= n/2;
  // for(let val of nums){
  //     map.set(val, (map.get(val)||0)+1)
  // }
  // for(let [val, count] of map){
  //     if(count > times){
  //         return val
  //     }
  // }
};
