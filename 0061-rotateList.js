// 61. Rotate List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

var rotateRight = function (head, k) {
  if (!head || k == 0) return head;

  let len = 1;
  let last = head;
  while (last.next) {
    len++;
    last = last.next;
  }

  k = k % len;
  if (k == 0) return head;

  let tail = head;
  for (let i = 1; i < len - k; i++) {
    tail = tail.next;
  }
  let newHead = tail.next;
  tail.next = null;
  last.next = head;
  return newHead;
};
