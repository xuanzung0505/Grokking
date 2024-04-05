class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function clone(node: ListNode | null) {
  if (node == null) return null;
  return new ListNode(node.val, node.next);
}

function reverse(head: ListNode | null, k: number): ListNode {
  const cloneHead = clone(head);
  let result = null;
  let index = 1;
  while (index <= k && head != null) {
    if (index === 1) {
      result = clone(head);
      result!.next = null;
    } else {
      let tmp = clone(result);
      result = clone(head);
      result!.next = tmp;
    }
    index++;
    head = head.next;
  }
  if (index > k) return result as ListNode;
  return cloneHead as ListNode;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let rHead: null | ListNode = null;
  let rTail: null | ListNode = null;
  let index = 1;
  if (head == null) return null;
  while (head != null) {
    //begin reverse
    if ((index - 1) % k === 0) {
      let rvsHead = reverse(clone(head) as ListNode, k);
      //save 1st rvsHead to rHead, and 1st rTail
      rHead = rHead == null ? clone(rvsHead) : rHead;
      //update rTail
      if (rTail === null) {
        rTail = rHead as ListNode;
        while (rTail!.next) {
          rTail = rTail!.next;
        }
      } else {
        while (rTail!.next) {
          rTail = rTail!.next;
        }
        rTail!.next = clone(rvsHead);
      }
      //   console.log(JSON.stringify(rvsHead));
    }
    head = head.next;
    index++;
  }
  return rHead;
}

const head = new ListNode(1);
const SIZE = 2;
for (let i = 2, tmp = head; i <= SIZE; i++) {
  tmp.next = new ListNode(i);
  tmp = tmp.next;
}
// console.log(JSON.stringify(head));
console.log(JSON.stringify(reverseKGroup(head, 2)));
