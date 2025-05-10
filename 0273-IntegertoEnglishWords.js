// 273. Integer to English Words
// Solved
// Hard
// Topics
// Companies
// Hint
// YouTube
// Convert a non-negative integer num to its English words representation.

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Constraints:

// 0 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (n) {
  if (n == 0) {
    return 'Zero';
  }

  let once = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];

  let tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  let multipliers = ['', 'Thousand', 'Million', 'Billion'];
  let group = 0;
  let res = '';
  while (n > 0) {
    let temp = '';
    if (n % 1000 !== 0) {
      let value = n % 1000;
      if (value >= 100) {
        console.log('called');
        temp += once[Math.floor(value / 100)] + ' Hundred ';
        value = value % 100;
      }
      if (value >= 20) {
        temp += tens[Math.floor(value / 10)] + ' ';
        value = value % 10;
      }
      if (value > 0) {
        temp += once[value] + ' ';
      }
      temp += multipliers[group] + ' ';
      res = temp + res;
    }
    group++;
    n = Math.floor(n / 1000);
  }
  return res.trim();
};
