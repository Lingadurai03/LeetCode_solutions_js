// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let inMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inMap.set(inorder[i], i);
  }
  return constructTree(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length,
    inMap,
  );
};
function constructTree(preOrder, ps, pe, inOrder, is, ie, inMap) {
  if (ps > pe || is > ie) return null;

  let root = new TreeNode(preOrder[ps]);
  let inRoot = inMap.get(root.val);
  let numsLeft = inRoot - is;

  root.left = constructTree(
    preOrder,
    ps + 1,
    ps + numsLeft,
    inOrder,
    is,
    inRoot - 1,
    inMap,
  );
  root.right = constructTree(
    preOrder,
    ps + numsLeft + 1,
    pe,
    inOrder,
    inRoot + 1,
    ie,
    inMap,
  );

  return root;
}
