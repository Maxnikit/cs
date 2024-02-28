/* eslint-disable max-classes-per-file */
import "normalize.css";
import "./style.css";

import { LinkedList } from "./linkedlist";
import { HashMap } from "./hashmap";
import { Tree, Node } from "./bst";

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
const myTree = buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree);

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
