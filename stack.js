class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
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

  unshift(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    this.size += 1;
  }

  shift() {
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

const s = new Stack();
s.unshift(1);
s.unshift(2);
s.unshift(3);

console.log(s.traverse());

console.log(s.shift());

console.log(s.traverse());
