/* eslint-disable import/prefer-default-export */
export class HashMap {
  constructor() {
    this.data = [];
    this.data.length = 16;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.data.length;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.data.length) {
      throw new Error("Trying to access index out of bound");
    }
    this.data[index] = {
      key,
      value,
    };
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.data.length) {
      throw new Error("Trying to access index out of bound");
    }

    return this.data[index];
  }

  has(key) {
    const index = this.hash(key);
    if (this.data[index]) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.data.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.data[index]) {
      this.data[index] = null;
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i]) {
        count += 1;
      }
    }
    return count;
  }

  clear() {
    for (let i = 0; i < this.data.length; i += 1) {
      this.data[i] = null;
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i]) {
        keys.push(this.data[i].key);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i]) {
        values.push(this.data[i].value);
      }
    }
    return values;
  }

  entires() {
    const entries = [];
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i]) {
        entries.push(this.data[i]);
      }
    }
    return entries;
  }
}
