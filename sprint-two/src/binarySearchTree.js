var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};

  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  _.extend(newBinarySearchTree, binarySearchTreeMethods);

  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(newValue) {
  //check if value given as argument is greater than or less than the current objects value
  var newTree = BinarySearchTree(newValue);

  if (newValue > this.value) {
    if (this.right === null) {
      console.log(newValue);
      this.right = newTree;
    } else {
      this.right.insert(newValue);
    }
  } else if (newValue < this.value) {
    if (this.left === null) {
      console.log(newValue);
      this.left = newTree;
    } else {
      this.left.insert(newValue);
    }
  }
  //check if the appropriate side child is null
  //if it is, create new tree with value, set the child to the new tree
  //if not, recursively call insert with the appropriate child

};

binarySearchTreeMethods.contains = function(target) {
  // Check if current tree have is our target value
  console.log('current tree value: ' + this.value);
  if (this.value === target ) {
    // if so ... return true
    return true;
  }
  //check if target value is less than or greater than current tree value
  if (target > this.value) {
    //check if appropriate child (left or right) is null
    if (this.right === null) {
      //if it is, return false
      return false;
    } else {
      //else run recursion on that child
      return this.right.contains(target);
    }
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  }
};

binarySearchTreeMethods.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

  return;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
