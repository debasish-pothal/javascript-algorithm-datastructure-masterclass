class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  traverse() {
    const result = [];
    let node = this.first;

    while (node) {
      result.push(node.val);
      node = node.next;
    }

    return result;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.last) {
      this.last = node;
      this.first = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size += 1;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const node = this.first;
    this.first = node.next;

    if (!this.first) {
      this.last = null;
    }

    this.size -= 1;
    node.next = null;
    return node;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.traverse());

console.log(q.dequeue());

console.log(q.traverse());
