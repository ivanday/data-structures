var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.objSize = 0;
  return newInstance;
};

var stackMethods = {
  'push': function(value) {
    this.objSize += 1;
    this.storage[this.objSize] = value;
  },
  'pop': function() {
    if (this.objSize !== 0) {
      var temp = this.storage[this.objSize];
      delete this.storage[this.objSize];
      this.objSize -= 1;
      return temp;
    }
  },
  'size': function() {
    return this.objSize;
  }
};


