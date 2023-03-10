var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size = size + 1;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size !== 0) {
      let temp = storage[size];
      delete storage[size];
      size = size - 1;
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
