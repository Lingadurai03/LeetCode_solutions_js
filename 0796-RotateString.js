// 796. Rotate String
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length != goal.length) return false;

  let text = s + s;
  let lps = constructLPS(text);

  let i = 0;
  let j = 0;
  while (i < text.length) {
    if (text[i] == goal[j]) {
      i++;
      j++;
    } else {
      if (j != 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
    if (j == goal.length) {
      return true;
    }
  }
  return false;
};

function constructLPS(pattern) {
  let lps = Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] == pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        i++;
      }
    }
  }
  return lps;
}
