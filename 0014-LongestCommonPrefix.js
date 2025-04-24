// 14. Longest Common Prefix
// Easy
// Topics
// Companies
// YouTube
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

function solution(arr) {
  let res = '';

  for (let i = 0; i < arr[0].length; i++) {
    for (let str of arr) {
      if (i == str.length || str[i] != arr[0][i]) {
        return res;
      }
    }
    res += arr[0][i];
  }
}

console.log(solution(['dog', 'racecar', 'car']));
