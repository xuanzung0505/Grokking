class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function clone(head: ListNode) {
  const result = new ListNode(head.val, head.next);
  return result;
}

function reverseList(head: ListNode | null): ListNode | null {
  let size = 0;
  let newHead: ListNode | null = new ListNode();
  let tmp: ListNode | null = null;
  if (head === null) return null;
  while (head != null) {
    //copy the head
    tmp = clone(head);
    if (size === 0) {
      newHead = tmp;
      newHead.next = null;
    } else {
      let copy = clone(newHead);
      tmp.next = copy;
      newHead = tmp;
    }
    //next
    size++;
    head = head.next;
  }

  return newHead;
}

const head = new ListNode(1);
for (let i = 2, tmp = head; i < 5; i++) {
  tmp.next = new ListNode(i);
  tmp = tmp.next;
}
console.log(reverseList(head));
