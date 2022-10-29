class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class doubleLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    var newNode = new Node(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      newNode = this.tail;
    }
  }

  removeHead() {
    if (this.head !== null) {
      var temp = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      return temp;
    }
  }

  contains(target) {
    var current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  addToHead(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      newNode = this.head;
    }
  }

  removeTail() {
    if (this.tail !== null) {
      var temp = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
      return temp;
    }
  }
}

