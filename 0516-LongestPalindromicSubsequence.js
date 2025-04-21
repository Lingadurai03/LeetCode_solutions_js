// 516. Longest Palindromic Subsequence
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 606.2K
// Submissions
// 949.6K
// Acceptance Rate
// 63.8%

// Using DP (Recursion, Memoization)
// function solution(str) {
//   let s1 = str;
//   let s2 = s1.split('').reverse().join('');

//   let n = s1.length;
//   let m = s2.length;

//   let dp = Array.from({ length: n }, () => Array(m).fill(-1));

//   function recursion(i, j) {
//     if (i == -1 || j == -1) return 0;
//     if (dp[i][j] != -1)
//       if (dp[i][j] != -1) {
//         return dp[i][j];
//       }
//     if (s1[i] == s2[j]) {
//       return (dp[i][j] = 1 + recursion(i - 1, j - 1));
//     } else {
//       return (dp[i][j] = Math.max(recursion(i - 1, j), recursion(i, j - 1)));
//     }
//   }
//   return recursion(n - 1, m - 1);
// }

// Using Tabulation
function solution(str) {
  let s1 = str;
  let s2 = s1.split('').reverse().join('');

  let n = s1.length;
  let m = s2.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}
console.log(solution('bbabcbcab'));
