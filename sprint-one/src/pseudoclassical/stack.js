var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.objSize = 0;
};

Stack.prototype.push = function(value) {
  this.objSize += 1;
  this.storage[this.objSize] = value;
};

Stack.prototype.pop = function() {
  if (this.objSize !== 0) {
    var temp = this.storage[this.objSize];
    delete this.storage[this.objSize];
    this.objSize -= 1;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.objSize;
};

