// 54. Spiral Matrix
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

function printEl(arr) {
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;
  let ans = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
      left++;
    }
  }
  return ans;
}

console.log(
  printEl([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ]),
);
