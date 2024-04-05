class Node {
  value;
  l;
  r;
  constructor({ value, l, r }) {
    this.value = value;
    this.l = l ?? null;
    this.r = r ?? null;
  }
}

class Heap {
  nodes;
  size;
  constructor() {
    this.nodes = [];
    this.size = 0;
  }

  insert(n) {
    if (!(n instanceof Node)) return false;
    this.nodes.push(n);
    this.size++;
    if (this.size > 1) {
      //heapify
      let current = this.size - 1;
      let parent_id = Math.ceil(current / 2) - 1;
      while (
        current != 0 &&
        this.nodes[current].value < this.nodes[parent_id].value
      ) {
        let tmp = this.nodes[current].value;
        this.nodes[current].value = this.nodes[parent_id].value;
        this.nodes[parent_id].value = tmp;
        current = parent_id;
        parent_id = Math.ceil(current / 2) - 1;
      }
    }
    return true;
  }

  traverse() {
    for (let node of this.nodes) {
      console.log(node.value, " ");
    }
  }
}

const h = new Heap();
h.insert(new Node({ value: 5 }));
h.insert(new Node({ value: 4 }));
h.insert(new Node({ value: 3 }));
h.insert(new Node({ value: 6 }));
h.insert(new Node({ value: 8 }));
h.insert(new Node({ value: 7 }));
h.insert(new Node({ value: 2 }));
h.traverse();
