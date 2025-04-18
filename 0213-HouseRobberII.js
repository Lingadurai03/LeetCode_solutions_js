// 213. House Robber II
// Solved
// Medium
// Topics
// Companies
// Hint
// YouTube
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

// Using Recursion  Time : O(n) , Space = O(n) + O(n) Auxiliary space

function solution(arr) {
  let includeFirst = solve(arr.slice(0, arr.length - 1), arr.length - 2);
  let includeLast = solve(arr.slice(1), arr.length - 2);

  return Math.max(includeFirst, includeLast);
}

// function solve(arr, n, dp = []) {
//   if (n == 0) return arr[n];
//   if (n < 0) return 0;
//   if (dp[n]) return dp[n];

//   let pick = arr[n] + solve(arr, n - 2);
//   let nPick = 0 + solve(arr, n - 1);

//   dp[n] = Math.max(pick, nPick);
//   return dp[n];
// }

// Tabulation O(n) and O(n)
// function solve(arr, n) {
//   let dp = Array(n);
//   dp[0] = arr[0];

//   for (let i = 1; i <= n; i++) {
//     let pick = arr[i] + (dp[i - 2] || 0);
//     let nPick = 0 + dp[i - 1];
//     dp[i] = Math.max(pick, nPick);
//   }

//   return dp[n];
// }

// Optimized O(n) and O(1)
function solve(arr, n) {
  let prev = arr[0];
  let sPrev = 0;

  for (let i = 0; i <= n; i++) {
    let pick = arr[i] + sPrev;
    let nPick = 0 + prev;

    let curI = Math.max(pick, nPick);
    sPrev = prev;
    prev = curI;
  }
  return prev;
}
console.log(solution([2, 1, 4, 9]));
