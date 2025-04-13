// 994. Rotting Oranges
// Solved
// Medium
// Topics
// Companies
// YouTube
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

var orangesRotting = function (mat) {
  let n = mat.length;
  let m = mat[0].length;
  let resTime = 0;
  let q = [];
  let vArray = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 2) {
        q.push({ row: i, col: j, time: 0 });
        vArray[i][j] = 2;
      }
    }
  }

  let deltaRow = [-1, 0, 1, 0];
  let deltaCol = [0, 1, 0, -1];

  while (q.length) {
    let { row, col, time } = q.shift();
    resTime = Math.max(time, resTime);

    for (let i = 0; i < deltaRow.length; i++) {
      let nRow = row + deltaRow[i];
      let nCol = col + deltaCol[i];

      if (
        nRow >= 0 &&
        nRow < n &&
        nCol >= 0 &&
        nCol < m &&
        vArray[nRow][nCol] != 2 &&
        mat[nRow][nCol] == 1
      ) {
        q.push({ row: nRow, col: nCol, time: time + 1 });
        vArray[nRow][nCol] = 2;
        mat[nRow][nCol] = 2;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 1) {
        return -1;
      }
    }
  }
  return resTime;
};
