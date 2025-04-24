// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Using Freq Map
// function solution(str1, str2) {
//   let n = str1.length;
//   let m = str2.length;

//   if (n != m) return false;
//   let freq = new Map();

//   for (let i = 0; i < n; i++) {
//     freq.set(str1[i], (freq.get(str1[i]) || 0) + 1);
//     freq.set(str2[i], (freq.get(str2[i]) || 0) - 1);
//   }

//   for (let [key, val] of freq) {
//     if (val != 0) {
//       return false;
//     }
//   }
//   return true;
// }

// Using Freq Array

function solution(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  if (n != m) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let freq = Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    freq[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    freq[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  for (let i = 0; i < n; i++) {
    if (freq[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] != 0) {
      return false;
    }
  }
  return true;
}

console.log(solution('ggii', 'eekk'));
