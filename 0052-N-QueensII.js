// 52. N-Queens II
// Hard
// Topics
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:

// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 9

function solution(n) {
  let count = 0;
  let board = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));

  function backTracking(col) {
    if (col == n) {
      count++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col)) {
        board[i][col] = 'Q';
        backTracking(col + 1);
        board[i][col] = '.';
      }
    }
  }
  backTracking(0);
  return count;
}

function isSafe(arr, row, col) {
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (arr[i][j] == 'Q') return false;
  }
  for (let i = col; i >= 0; i--) {
    if (arr[row][i] == 'Q') return false;
  }
  for (let i = row, j = col; i < arr.length && j >= 0; i++, j--) {
    if (arr[i][j] == 'Q') return false;
  }
  return true;
}

console.log(solution(4));
