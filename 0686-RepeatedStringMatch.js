// 686. Repeated String Match
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

// Example 1:

// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
// Example 2:

// Input: a = "a", b = "aa"
// Output: 2

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist of lowercase English letters.

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let n = a.length;
  let m = b.length;
  let lps = constructLPS(b);
  let rep = Math.ceil(m / n);

  if (kmpSearch(a, b, lps, rep)) {
    return rep;
  }
  if (kmpSearch(a, b, lps, rep + 1)) {
    return rep + 1;
  }
  return -1;
};

function kmpSearch(text, pat, lps, rep) {
  let n = text.length;
  let m = pat.length;

  let i = 0;
  let j = 0;
  while (i < n * rep) {
    if (text[i % n] == pat[j]) {
      i++;
      j++;
    } else {
      if (j != 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
    if (j == pat.length) return true;
  }
  return false;
}

function constructLPS(pat) {
  let n = pat.length;
  let lps = Array(n).fill(0);

  let len = 0;
  let idx = 1;

  while (idx < n) {
    if (pat[len] == pat[idx]) {
      len++;
      lps[idx] = len;
      idx++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        idx++;
      }
    }
  }
  return lps;
}
