// 51. N-Queens
// Solved
// Hard
// Topics
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// Constraints:

// 1 <= n <= 9

const solveNQueens = function (n) {
  let orgBoard = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));
  let ans = [];

  function backTracking(n, board, col) {
    if (col == n) {
      return ans.push(Array.from(board, (row) => [...row]));
    }
    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col, n)) {
        board[i][col] = 'Q';
        backTracking(n, board, col + 1);
        board[i][col] = '.';
      }
    }
  }
  backTracking(n, orgBoard, 0);

  return ans.map((arr) => arr.map((a) => a.join('')));
};

function isSafe(arr, row, col, n) {
  let dubRow = row;
  let dubCol = col;

  while (dubRow >= 0 && dubCol >= 0) {
    if (arr[dubRow][dubCol] == 'Q') return false;
    dubRow--;
    dubCol--;
  }
  dubRow = row;
  dubCol = col;
  while (dubCol >= 0) {
    if (arr[dubRow][dubCol] == 'Q') return false;
    dubCol--;
  }

  dubRow = row;
  dubCol = col;
  while (dubRow < n && dubCol >= 0) {
    if (arr[dubRow][dubCol] == 'Q') return false;
    dubRow++;
    dubCol--;
  }
  return true;
}

console.log(solveNQueens(4));
