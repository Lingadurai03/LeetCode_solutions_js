// 1143. Longest Common Subsequence
// Solved
// Medium
// Topics
// Companies
// Hint
// YouTube
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

// Seen this question in a real interview before?
// 1/5

// function solution(str1, str2) {
//   function recursion(idx1, idx2) {
//     if (idx1 == -1 || idx2 == -1) {
//       return 0;
//     }

//     if (str1[idx1] == str2[idx2]) {
//       return 1 + recursion(idx1 - 1, idx2 - 1);
//     }
//     if (str1[idx1] != str2[idx2]) {
//       return Math.max(recursion(idx1 - 1, idx2), recursion(idx1, idx2 - 1));
//     }
//   }
//   return recursion(str1.length - 1, str2.length - 1);
// }

// Using DP (Recursion, Memoization)

// function solution(str1, str2) {
//   let dp = Array.from({ length: str1.length }, () =>
//     Array(str2.length).fill(-1),
//   );
//   function recursion(idx1, idx2) {
//     if (idx1 == -1 || idx2 == -1) {
//       return 0;
//     }
//     if (dp[idx1][idx2] != -1) {
//       return dp[idx1][idx2];
//     }

//     if (str1[idx1] == str2[idx2]) {
//       return (dp[idx1][idx2] = 1 + recursion(idx1 - 1, idx2 - 1));
//     }
//     if (str1[idx1] != str2[idx2]) {
//       return (dp[idx1][idx2] = Math.max(
//         recursion(idx1 - 1, idx2),
//         recursion(idx1, idx2 - 1),
//       ));
//     }
//   }
//   return recursion(str1.length - 1, str2.length - 1);
// }

// Using Tabulation
function solution(str1, str2) {
  let dp = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill(0),
  );

  for (let idx1 = 1; idx1 <= str1.length; idx1++) {
    for (let idx2 = 1; idx2 <= str2.length; idx2++) {
      if (str1[idx1 - 1] == str2[idx2 - 1]) {
        dp[idx1][idx2] = 1 + dp[idx1 - 1][idx2 - 1];
      } else {
        dp[idx1][idx2] = Math.max(dp[idx1][idx2 - 1], dp[idx1 - 1][idx2]);
      }
    }
  }
  return dp[str1.length][str2.length];
}

console.log(solution('ABCDGH', 'AEDFHR'));
