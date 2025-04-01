// 79. Word Search
// Solved
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

function solution(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        if (isValid(board, word, i, j)) {
          return true;
        }
      }
    }
  }
  return false;
}

function isValid(arr, word, row, col, wIdx = 0) {
  if (wIdx == word.length) return true;

  if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length)
    return false;

  if (arr[row][col] == word[wIdx]) {
    let temp = arr[row][col];
    arr[row][col] = '#';

    let res =
      isValid(arr, word, row + 1, col, wIdx + 1) ||
      isValid(arr, word, row - 1, col, wIdx + 1) ||
      isValid(arr, word, row, col + 1, wIdx + 1) ||
      isValid(arr, word, row, col - 1, wIdx + 1);

    arr[row][col] = temp;
    return res;
  }
  return false;
}

console.log(
  solution(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
  ),
);
