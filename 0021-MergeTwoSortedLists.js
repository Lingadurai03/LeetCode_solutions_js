// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

var mergeTwoLists = function (list1, list2) {
  let dummy = { val: -1, next: null };
  let temp = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      temp = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      temp = list2;
      list2 = list2.next;
    }
  }
  if (list1) {
    temp.next = list1;
  }
  if (list2) {
    temp.next = list2;
  }

  return dummy.next;
};
