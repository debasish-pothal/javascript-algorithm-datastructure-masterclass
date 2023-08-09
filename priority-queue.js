class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  _getParent(n) {
    const index = Math.floor((n - 1) / 2);

    return { id: index, value: this.values[index] };
  }

  _getChildrens(n) {
    const leftIndex = 2 * n + 1;
    const rightIndex = 2 * n + 2;

    const leftVal =
      leftIndex >= this.values.length ? null : this.values[leftIndex];
    const rightVal =
      rightIndex >= this.values.length ? null : this.values[rightIndex];

    return [
      { id: leftIndex, value: leftVal },
      { id: rightIndex, value: rightVal },
    ];
  }

  _checkPriority(node1, node2) {
    return node1.priority < node2.priority;
  }

  traverse() {
    return this.values;
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);

    this.values.push(node);

    let i = this.values.length - 1;

    while (i > 0 && this._checkPriority(this._getParent(i).value, node)) {
      const { id: parentIndex, value: parentValues } = this._getParent(i);

      this.values[i] = parentValues;
      this.values[parentIndex] = node;

      i = parentIndex;
    }
  }

  dequeue() {
    const firstNode = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    let i = 0;

    while (true) {
      const [leftChild, rightChild] = this._getChildrens(i);
      const {
        id: leftIndex,
        value: leftValue = { val: 0, priority: Number.MIN_VALUE },
      } = leftChild;
      const {
        id: rightIndex,
        value: rightValue = { val: 0, priority: Number.MIN_VALUE },
      } = rightChild;

      if (!leftValue && !rightValue) {
        break;
      }

      const newIndex =
        leftValue.priority > rightValue.priority ? leftIndex : rightIndex;

      const newIndexValue = {
        ...this.values[newIndex],
      };

      const oldIndexValue = {
        ...this.values[i],
      };

      if (oldIndexValue.priority < newIndexValue.priority) {
        this.values[i] = newIndexValue;
        this.values[newIndex] = oldIndexValue;

        i = newIndex;
      } else {
        break;
      }
    }

    return firstNode;
  }
}

const pq = new PriorityQueue();

pq.enqueue(10, 1);
pq.enqueue(20, 1);
pq.enqueue(5, 2);
pq.enqueue(1, 3);

console.log(pq.traverse());

console.log(pq.dequeue());

console.log(pq.traverse());
