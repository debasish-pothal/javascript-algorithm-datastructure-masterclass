class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return;
    }

    const lastNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode.prev;
      this.tail.next = null;

      lastNode.prev = null;
    }

    this.length -= 1;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length += 1;
  }

  shift() {
    if (!this.head) {
      return;
    }

    const firstNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      this.head.next = firstNode.next;

      firstNode.prev = null;
      firstNode.next = null;
    }

    this.length -= 1;
  }

  get(index) {
    let node = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      node = node.next;
      currentIndex += 1;
    }

    return node;
  }

  set(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }

    const node = this.get(index);
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
      const newNode = new Node(val);
      const node = this.get(index - 1);

      newNode.prev = node;
      newNode.next = node.next;

      node.next.prev = newNode;
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
      const node = this.get(index);

      const prevNode = node.prev;
      const nextNode = node.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      node.next = null;
      node.prev = null;

      this.length -= 1;
    }
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    }
  }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);

console.log(dll);
