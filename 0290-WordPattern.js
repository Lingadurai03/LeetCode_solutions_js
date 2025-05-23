// 290. Word Pattern
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let strArr = s.split(' ');

  if (strArr.length != pattern.length) return false;

  let wordMap = new Map();
  let charMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = strArr[i];

    if (charMap.has(char) && charMap.get(char) != word) return false;
    if (wordMap.has(word) && wordMap.get(word) != char) return false;

    wordMap.set(word, char);
    charMap.set(char, word);
  }
  return true;
};
