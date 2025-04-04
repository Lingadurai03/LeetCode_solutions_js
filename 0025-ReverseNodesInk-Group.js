// 25. Reverse Nodes in k-Group
// Solved
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let temp = head;
  let newHead = null;
  let prevLast = null;

  while (temp) {
    let kThNode = findKthNode(temp, k);

    let lastNode = null;
    if (kThNode) {
      lastNode = kThNode.next;
      kThNode.next = null;
    } else {
      if (prevLast) {
        prevLast.next = temp;
        break;
      }
    }

    let reversedHead = reverse(temp);

    if (!newHead) newHead = reversedHead;
    if (prevLast) prevLast.next = reversedHead;

    prevLast = temp;
    temp = lastNode;
  }
  return newHead;
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

function findKthNode(temp, k) {
  k--;
  while (k) {
    k--;
    temp = temp?.next || null;
  }
  return temp;
}
