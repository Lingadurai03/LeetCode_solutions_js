// 1013. Partition Array Into Three Parts With Equal Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// YouTube
// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:

// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

// Constraints:

// 3 <= arr.length <= 5 * 104
// -104 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  if (arr.length < 3) return false;
  let totalSum = 0;
  for (let val of arr) {
    totalSum += val;
  }
  if (totalSum % 3) return false;

  let curSum = 0;
  let count = 0;
  let singleSum = totalSum / 3;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];

    if (curSum == singleSum) {
      curSum = 0;
      count++;

      if (count == 2 && i < arr.length - 1) {
        return true;
      }
    }
  }

  return false;
};
