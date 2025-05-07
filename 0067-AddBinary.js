// 67. Add Binary
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  let res = '';
  let carry = 0;

  while (aIdx >= 0 || bIdx >= 0) {
    let bit1 = aIdx >= 0 ? +a[aIdx] : 0;
    let bit2 = bIdx >= 0 ? +b[bIdx] : 0;

    let sum = bit1 + bit2 + carry;
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);

    aIdx--;
    bIdx--;
  }

  carry && (res = carry + res);
  return res;
};
