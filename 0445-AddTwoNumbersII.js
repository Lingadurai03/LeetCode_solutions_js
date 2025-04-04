// 445. Add Two Numbers II
// Solved
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Follow up: Could you solve it without reversing the input lists?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverse(l1);
  l2 = reverse(l2);
  let ans = new ListNode(-1);
  let ansTemp = ans;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    let rem = sum % 10;
    carry = Math.trunc(sum / 10);
    ansTemp.next = new ListNode(rem);
    ansTemp = ansTemp.next;
  }

  let result = reverse(ans.next);

  while (result && result.val == 0 && result.next) {
    result = result.next;
  }
  return result;
};

function reverse(head) {
  let temp = head;
  let prev = null;

  while (temp) {
    let next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
}
