var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (size === 0) {
      size = size + 1;
      storage[size] = value;
    } else {
      for (var i = size; i > 0; i--) {
        storage[i + 1] = storage[i];
      }
      storage[1] = value;
      size = size + 1;
    }
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var temp = storage[size];
      delete storage[size];
      size = size - 1;
      return temp;
    }
  };

  someInstance.size = function() {
    console.log(size);
    return size;
  };

  return someInstance;
};
