// 56. Merge Intervals
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let resIdx = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[resIdx][1] >= intervals[i][0]) {
      intervals[resIdx][1] = Math.max(intervals[resIdx][1], intervals[i][1]);
    } else {
      resIdx++;
      intervals[resIdx] = intervals[i];
    }
  }

  return intervals.slice(0, resIdx + 1);
};
