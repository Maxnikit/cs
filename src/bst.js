/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
export class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (node.data > this.root) {
      if (!this.right) {
        this.right = node;
      } else {
        this.root = this.right;
      }
    } else if (!this.left) {
      this.left = node;
    } else {
      this.root = this.left;
    }
  }
}

function buildTree(array) {
  if (array.length === 0) {
    return null;
  }
  const uniqueArray = [...new Set(array.sort((a, b) => a - b))];

  const tree = new Tree();
  const middle = Math.floor(uniqueArray.length / 2);

  tree.root = new Node(uniqueArray[middle]);

  const left = uniqueArray.slice(0, middle);
  const right = uniqueArray.slice(middle + 1);

  tree.root.left = buildTree(left);
  tree.root.right = buildTree(right);

  return tree.root;
}
const myNode = buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree);
myTree.insert(10000);
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
prettyPrint(myTree);
