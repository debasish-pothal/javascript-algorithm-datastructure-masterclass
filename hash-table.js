class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const hashKey = this._hash(key);

    const newData = { key, val };

    if (this.keyMap[hashKey]) {
      this.keyMap[hashKey].push(newData);
    } else {
      this.keyMap[hashKey] = [newData];
    }
  }

  get(key) {
    const hashKey = this._hash(key);

    if (this.keyMap[hashKey]) {
      const data = this.keyMap[hashKey].find((obj) => obj.key === key);

      return data;
    } else {
      return null;
    }
  }
}
