var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.objSize = 0;
};

Queue.prototype.enqueue = function(value) {
  if (this.objSize === 0) {
    this.objSize += 1;
    this.storage[this.objSize] = value;
  } else {
    for (var i = this.objSize; i > 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[1] = value;
    this.objSize += 1;
  }
};

Queue.prototype.dequeue = function() {
  if (this.objSize !== 0) {
    var temp = this.storage[this.objSize];
    delete this.storage[this.objSize];
    this.objSize -= 1;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.objSize;
};


