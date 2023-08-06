class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let node = this.head;
    const result = [];

    while (node) {
      result.push(node.val);
      node = node.next;
    }

    return result.join(" -> ");
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode && currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (prevNode) {
      prevNode.next = null;
    } else {
      this.head = null;
    }

    this.tail = prevNode;
    this.length -= 1;

    return currentNode;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
  }

  shift() {
    if (!this.head) {
      return;
    }

    const node = this.head;
    this.head = node.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length -= 1;

    return node;
  }

  get(index) {
    let node = this.head;
    let startIndex = 0;

    while (startIndex !== index) {
      startIndex += 1;
      node = node.next;
    }

    return node;
  }

  set(index, val) {
    const node = this.get(index);

    if (!node) {
      return;
    }

    node.val = val;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const node = this.get(index);
      const newNode = new Node(val);
      newNode.next = node.next;
      node.next = newNode;

      this.length += 1;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      const prevNode = this.get(index - 1);
      prevNode.next = prevNode.next.next;
      this.length -= 1;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }
}

const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);

console.log(sll.traverse());
console.log("-".repeat(10));

sll.reverse();
console.log(sll.traverse());
console.log("-".repeat(10));
