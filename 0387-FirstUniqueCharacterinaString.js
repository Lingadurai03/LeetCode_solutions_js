// 387. First Unique Character in a String
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let base = 'a'.charCodeAt(0);

  let freqArr = Array(26).fill(0);

  for (let val of s) {
    freqArr[val.charCodeAt(0) - base]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (freqArr[s[i].charCodeAt(0) - base] == 1) {
      return i;
    }
  }
  return -1;
};
