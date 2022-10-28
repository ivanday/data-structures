

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
  this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.newGraph[node] = {'value': node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.newGraph[node] === undefined) {
    return false;
  } else {
    return true;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(node)) {
      this.edges.splice(i, 1);
    }
  }
  delete this.newGraph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //iterate through edges in newGraph
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      return true;
    }
  }
  return false;
  //check if each tuple includes fromNode and toNode
  //if it does, return true
  //if after iterating it doesn't, return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.newGraph) {
    cb(parseInt(node));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


