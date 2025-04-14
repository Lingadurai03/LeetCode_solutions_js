// 200. Number of Islands
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visitedArr = Array.from({ length: n }, () =>
    Array(grid[0].length).fill(0),
  );

  let isLandCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visitedArr[i][j] && grid[i][j] == '1') {
        bfs(i, j, visitedArr, grid);
        isLandCount++;
      }
    }
  }

  return isLandCount;
};

function bfs(row, col, visitedArr, grid) {
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let q = [];
  q.push([row, col]);
  visitedArr[row][col] = 1;
  while (q.length) {
    let [row, col] = q.shift();
    for (let [dr, dc] of directions) {
      let r = row + dr;
      let c = col + dc;

      if (
        r >= 0 &&
        r < grid.length &&
        c >= 0 &&
        c < grid[0].length &&
        !visitedArr[r][c] &&
        grid[r][c] == '1'
      ) {
        visitedArr[r][c] = 1;
        q.push([r, c]);
      }
    }
  }
}
