// 704. Binary Search
// Easy
// Topics
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

function binarySearch(arr, k) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left + 1) / 2);

    if (arr[middle] == k) {
      return middle;
    }

    if (k < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
