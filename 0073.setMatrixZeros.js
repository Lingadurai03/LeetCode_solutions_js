// 73. Set Matrix Zeroes
// Medium
// Topics
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// BruteForce
// function setZero(mat) {
//   for (let row = 0; row < mat[0].length; row++) {
//     for (let col = 0; col < mat.length; col++) {
//       if (!mat[row][col]) {
//         for (let i = 0; i < mat[0].length; i++) {
//           mat[i][col] = -1;
//           mat[col][i] = -1;
//         }
//       }
//     }
//   }
//   for (let row = 0; row < mat[0].length; row++) {
//     for (let col = 0; col < mat.length; col++) {
//       if (mat[row][col] == -1) {
//         mat[row][col] = 0;
//       }
//       d;
//     }
//   }
//   return mat;
// }
// Better
// function setZero(arr) {
//   let rowValue = Array(arr.length).fill(1);
//   let colValue = Array(arr[0].length).fill(1);

//   for (let row = 0; row < rowValue.length; row++) {
//     for (let col = 0; col < colValue.length; col++) {
//       if (!arr[row][col]) {
//         rowValue[row] = 0;
//         colValue[col] = 0;
//       }
//     }
//   }
//   for (let row = 0; row < rowValue.length; row++) {
//     for (let col = 0; col < colValue.length; col++) {
//       if (!rowValue[row] || !colValue[col]) {
//         arr[row][col] = 0;
//       }
//     }
//   }
//   return arr;
// }

// Optimal
function setZero(arr) {
  let firstValue = 1;
  let rowLength = arr.length;
  let colLength = arr[0].length;

  for (let row = 0; row < rowLength; row++) {
    if (arr[row][0] == 0) firstValue = 0;
    for (let col = 1; col < colLength; col++) {
      if (!arr[row][col]) {
        arr[row][0] = 0;
        arr[0][col] = 0;
      }
    }
  }
  for (let row = rowLength - 1; row >= 1; row--) {
    for (let col = colLength - 1; col >= 1; col--) {
      if (!arr[0][col] || !arr[row][0]) {
        arr[row][col] = 0;
      }
    }
  }

  if (!arr[0][0]) {
    for (let i = 0; i < colLength; i++) {
      arr[0][i] = 0;
    }
  }
  if (!firstValue) {
    for (let i = 0; i < rowLength; i++) {
      arr[i][0] = 0;
    }
  }
  return arr;
}
console.log(setZero([[2], [3], [1, 1, 5], [0, -1, -1]]));
