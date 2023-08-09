class MaxHeap {
  constructor() {
    this.values = [];
  }

  getParentIndex(n) {
    return Math.floor((n - 1) / 2);
  }

  getChildIndexes(n) {
    return [2 * n + 1, 2 * n + 2];
  }

  traverse() {
    return this.values;
  }

  insert(val) {
    this.values.push(val);

    let i = this.values.length - 1;

    while (i > 0 && this.values[this.getParentIndex(i)] < this.values[i]) {
      const parentIndex = this.getParentIndex(i);

      [this.values[i], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[i],
      ];

      i = parentIndex;
    }
  }

  remove() {
    const max = this.values[0];

    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    let i = 0;

    while (true) {
      const [leftIndex, rightIndex] = this.getChildIndexes(i);

      const leftVal =
        leftIndex >= this.values.length
          ? Number.MIN_VALUE
          : this.values[leftIndex];
      const rightVal =
        rightIndex >= this.values.length
          ? Number.MIN_VALUE
          : this.values[rightIndex];

      const newIndex = leftVal > rightVal ? leftIndex : rightIndex;

      if (this.values[i] < this.values[newIndex]) {
        [this.values[i], this.values[newIndex]] = [
          this.values[newIndex],
          this.values[i],
        ];
        i = newIndex;
      } else {
        break;
      }
    }

    return max;
  }
}

const mh = new MaxHeap();

mh.insert(33);
mh.insert(39);
mh.insert(41);
mh.insert(27);
mh.insert(18);
mh.insert(12);
mh.insert(55);

console.log(mh.traverse());

console.log(mh.remove());
console.log(mh.remove());
console.log(mh.remove());
console.log(mh.remove());

console.log(mh.traverse());

/*

        55
    33      41
27     18 12   39

55, 33, 41, 27, 18, 12, 39


*/
