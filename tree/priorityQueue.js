// using Arrays
class item {
  constructor() {
    this.value;
    this.priority;
  }
}

function enqueue(value, priority) {
  // Increase the size
  size++;

  // Insert the element
  pr[size] = new item();
  pr[size].value = value;
  pr[size].priority = priority;
}

function peek() {
  let highestPriority = Number.MIN_SAFE_INTEGER;
  let ind = -1;

  for (var i = 0; i <= size; i++) {
    // If priority is same choose the element with the highest value
    if (
      highestPriority == pr[i].priority &&
      ind > -1 &&
      pr[ind].value < pr[i].value
    ) {
      ind = i;
    } else if (highestPriority < pr[i].priority) {
      highestPriority = pr[i].priority;
      ind = i;
    }
  }
  return ind;
}

function dequeue() {
  // Find the position of the element with highest priority
  let ind = peek();

  // Shift the element one index before
  // from the position of the element
  // with highest priority is found
  for (var i = ind; i < size; i++) {
    pr[i] = pr[i + 1];
  }

  // Decrease the size of the
  // priority queue by one
  size--;
}

let pr = new Array(100000).fill(new item());
let size = -1;
enqueue(10, 2);
enqueue(14, 4);
enqueue(16, 4);
enqueue(12, 3);

let ind = peek();
console.log(pr[ind].value);
dequeue();
ind = peek();
console.log(pr[ind].value);
dequeue();
ind = peek();
console.log(pr[ind].value);
