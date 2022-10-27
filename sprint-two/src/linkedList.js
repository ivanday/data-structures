var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new Node with value
    var newNode = Node(value);
    //set the current tail next to the new node
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      //set list tail to new node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //Check if there is a head
    if (list.head !== null) {
      // set a temp value for list.head
      var temp = list.head;
      // reassign list.head to null
      list.head = list.head.next;
      //return temp
      return temp.value;
    }
  };

  list.contains = function(target) {

    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
