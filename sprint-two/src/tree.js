var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //base case: check if the value is equal to target
  if (this.value === target) {
    return true;
  }
  //check if there are children, if there are, iterate of children anc call contains on each one
  if (this.children.length > 0) {
    // this.children.forEach(function(child) {
    //   child.contains(target);
    // });
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }

  }

  //return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
