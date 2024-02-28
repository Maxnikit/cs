/* eslint-disable max-classes-per-file */
import "normalize.css";
import "./style.css";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    let currentHead;
    if (this.head === null) {
      this.head = node;
    } else {
      currentHead = this.head;
      this.head = node;
      node.next = currentHead;
    }
    this.size += 1;
  }

  getSize() {
    console.log("boop");
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;

    this.size -= 1;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `(${current.value}) -> `;
      current = current.next;
    }
    string += "NULL";
    return string;
  }

  insertAt(value, index) {
    const node = new Node(value);
    let current = this.head;
    let previous;
    for (let i = 0; i < index; i += 1) {
      previous = current;
      current = current.next;

      if (current === null) {
        return;
      }
    }
    previous.next = node;
    node.next = current;
    this.size += 1;
  }

  removeAt(index) {
    let current = this.head;
    let previous;
    for (let i = 0; i < index; i += 1) {
      previous = current;
      current = current.next;

      if (current === null) {
        return;
      }
    }
    previous.next = current.next;
    this.size -= 1;
  }
}

const list = new LinkedList();
list.append("element1");
list.append("element2");
list.append("element3");
list.prepend("FirstValue");
console.log(list);
list.pop();

list.insertAt("element4", 2);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
const myapp = document.querySelector("my-app");

const displayListContent = () => {
  const listContainer = document.createElement("ul");
  let current = list.getHead();
  while (current !== null) {
    const listItem = document.createElement("li");
    listItem.textContent = `${current.value}`;
    listContainer.appendChild(listItem);
    current = current.next;
  }
  myapp.appendChild(listContainer);
};

displayListContent();
