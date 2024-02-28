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
    // TODO not done
  }
}
