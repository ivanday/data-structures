class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.objSize = 0;
  }

  push(value) {
    this.objSize += 1;
    this.storage[this.objSize] = value;
  }

  pop() {
    if (this.objSize !== 0) {
      var temp = this.storage[this.objSize];
      delete this.storage[this.objSize];
      this.objSize -= 1;
      return temp;
    }
  }

  size() {
    return this.objSize;
  }
}