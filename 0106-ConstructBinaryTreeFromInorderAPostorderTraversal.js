// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Solved
// Medium
// Topics
// Companies
// YouTube
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let inMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    inMap.set(inorder[i], i);
  }

  return constructTree(
    postorder,
    0,
    postorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    inMap,
  );
};

function constructTree(postorder, ps, pe, inorder, is, ie, inMap) {
  if (ps > pe || is > ie) return null;

  let root = new TreeNode(postorder[pe]);
  let iRoot = inMap.get(root.val);
  let numsLeft = iRoot - is;

  root.left = constructTree(
    postorder,
    ps,
    ps + numsLeft - 1,
    inorder,
    is,
    iRoot - 1,
    inMap,
  );
  root.right = constructTree(
    postorder,
    ps + numsLeft,
    pe - 1,
    inorder,
    iRoot + 1,
    ie,
    inMap,
  );

  return root;
}
