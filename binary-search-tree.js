class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    let node = this.root;

    while (node) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  bfs() {
    const result = [];
    const queue = [this.root];

    while (queue && queue.length) {
      const node = queue.pop();
      result.push(node.val);

      if (node.left) {
        queue.unshift(node.left);
      }

      if (node.right) {
        queue.unshift(node.right);
      }
    }

    return result;
  }

  dfsPre() {
    const result = [];

    const helper = (node) => {
      if (node) {
        result.push(node.val);
      }

      if (node.left) {
        helper(node.left);
      }

      if (node.right) {
        helper(node.right);
      }
    };

    helper(this.root);

    return result;
  }

  dfsIn() {
    const result = [];

    const helper = (node) => {
      if (node.left) {
        helper(node.left);
      }

      if (node) {
        result.push(node.val);
      }

      if (node.right) {
        helper(node.right);
      }
    };

    helper(this.root);

    return result;
  }

  dfsPost() {
    const result = [];

    const helper = (node) => {
      if (node.left) {
        helper(node.left);
      }

      if (node.right) {
        helper(node.right);
      }

      if (node) {
        result.push(node.val);
      }
    };

    helper(this.root);

    return result;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
console.log(bst);

console.log(bst.bfs());
console.log(bst.dfsPre());
console.log(bst.dfsIn());
console.log(bst.dfsPost());
