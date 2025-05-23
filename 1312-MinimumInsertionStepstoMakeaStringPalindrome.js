// 1312. Minimum Insertion Steps to Make a String Palindrome
// Solved
// Hard
// Topics
// Companies
// Hint
// YouTube
// Given a string s. In one step you can insert any character at any index of the string.

// Return the minimum number of steps to make s palindrome.

// A Palindrome String is one that reads the same backward as well as forward.

// Example 1:

// Input: s = "zzazz"
// Output: 0
// Explanation: The string "zzazz" is already palindrome we do not need any insertions.
// Example 2:

// Input: s = "mbadm"
// Output: 2
// Explanation: String can be "mbdadbm" or "mdbabdm".
// Example 3:

// Input: s = "leetcode"
// Output: 5
// Explanation: Inserting 5 characters the string becomes "leetcodocteel".

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};
