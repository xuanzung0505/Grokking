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

function solve(head: ListNode | null, maxSize: number) {
  let size = 0;
  let newHead: ListNode = new ListNode();
  let tail: ListNode | null = new ListNode();
  let tmp: ListNode | null = null;

  while (head != null && size < maxSize) {
    //copy the head
    tmp = clone(head);
    if (size === 0) {
      newHead = tmp;
      newHead.next = null;
      //save the first element -> later it will be the tail
      tail = clone(tmp);
    } else {
      let copyNext = tmp.next ? clone(tmp.next) : null;
      tail.next = copyNext;
      let copy = clone(newHead);
      tmp.next = copy;
      newHead = tmp;
    }
    //next
    size++;
    head = head.next;
  }
  console.log("newHead", newHead);
  console.log("tail", tail);
  return {
    newHead,
    tail,
  };
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null) return null;
  if (left === right) return head;

  let root: ListNode | null = clone(head);
  let index = 1; //1-based index
  let newHead: ListNode = new ListNode(),
    tail = null;
  while (head != null) {
    if (index === left) {
      let result = solve(head, right - left + 1);
      newHead = result.newHead;
      tail = result.tail;
      break;
    }
    head = head.next;
    index++;
  }
  index = 1;
  head = root;
  while (head != null) {
    if (index === 1 && left === 1) {
      root = newHead;
      head = root;
      while (head.next != null) {
        head = head.next;
      }
      head.next = tail?.next ? tail.next : null;
      break;
    }
    if (index + 1 === left && left > 1) {
      head.next = newHead;
    }
    if (index === right) {
      head.next = tail?.next ? tail.next : null;
    }
    head = head.next;
    index++;
  }
  return root;
}

const head = new ListNode(1);
for (let i = 2, tmp = head; i <= 5; i++) {
  tmp.next = new ListNode(i);
  tmp = tmp.next;
}
// console.log(JSON.stringify(head));
console.log(JSON.stringify(reverseBetween(head, 2, 2)));
