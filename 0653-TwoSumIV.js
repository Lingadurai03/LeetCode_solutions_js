// 653. Two Sum IV - Input is a BST
// Solved
// Easy
// Topics
// Companies
// YouTube
// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

// Example 1:

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:

// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

class BSTIterator {
  stack = [];
  reverse = false;

  constructor(root, reverse = false) {
    this.reverse = reverse;
    this.pushAll(root);
  }
  next = (node) => {
    let top = this.stack.pop();
    if (this.reverse) {
      if (top.left) this.pushAll(top.left);
    } else {
      if (top.right) this.pushAll(top.right);
    }
    return top.val;
  };

  pushAll = (node) => {
    while (node) {
      this.stack.push(node);
      if (this.reverse) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
  };
}
var findTarget = function (root, k) {
  let bst1 = new BSTIterator(root);
  let bst2 = new BSTIterator(root, true);

  let start = bst1.next();
  let end = bst2.next();
  let sum = start + end;
  while (start < end) {
    if (sum == k) {
      return true;
    } else if (sum < k) {
      start = bst1.next();
    } else end = bst2.next();
    sum = start + end;
  }
  return false;
};
