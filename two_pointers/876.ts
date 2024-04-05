class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head as ListNode;
  let fast = head as ListNode;
  while (fast != null) {
    if (fast.next) {
      fast = fast.next;
      if (fast.next) {
        fast = fast.next;
      }
      slow = slow.next as ListNode;
    } else {
      break;
    }
  }
  return slow;
}
