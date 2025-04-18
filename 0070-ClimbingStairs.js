// 70. Climbing Stairs
// Easy
// Topics
// Companies
// Hint
// YouTube
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// Using recursion
// function solution(n) {
//   if (n < 0) return 0;
//   if (n == 0) return 1;

//   return solution(n - 1) + solution(n - 2);
// }
// console.log(solution(3));

// using DP()
function solution(n, memo = {}) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (memo[n]) return memo[n];

  memo[n] = solution(n - 1) + solution(n - 2);
  return memo[n];
}
console.log(solution(3));
