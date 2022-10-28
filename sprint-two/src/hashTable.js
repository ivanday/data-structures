

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageAtIndex = this._storage.get(index) || [];
  //check if the storageAtIndex store is undefined
  if (storageAtIndex === []) {
    //if it is, set the storage at the index to an array of our key, value pair [k, v]
    this._storage.set(index, [[k, v]]);

  } else {
    for (var i = 0; i < storageAtIndex.length; i++) {
      //else, iterate over the array at index and check each key for a match
      if (storageAtIndex[i][0] === k) {
        //if the keys match, overwrite the value at that key
        storageAtIndex[i][1] = v;
      }
    }
    storageAtIndex.push([k, v]);
  }
  this._storage.set(index, storageAtIndex);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageAtIndex = this._storage.get(index);
  //if storageAtIndex is undefined, return undefined
  if (storageAtIndex === undefined) {
    return undefined;
  }
  for (var i = 0; i < storageAtIndex.length; i++) {
    //iterate over storageAtIndex
    if (storageAtIndex[i][0] === k) {
      //if key found, return value
      return storageAtIndex[i][1];
    }

  }
  //if break iterating return undefined
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageAtIndex = this._storage.get(index);
  //iterate over the array stored at that index
  for (var i = 0; i < storageAtIndex.length; i++) {
    if (storageAtIndex[i][0] === k) {
      storageAtIndex.splice(i, 1);
      this._storage.set(index, storageAtIndex);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


