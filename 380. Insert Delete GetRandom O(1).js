/**
 * Initialize your data structure here.
 */
//var hash;

var RandomizedSet = function() {
    this.hash = {};
    this.arr = [];
    return null;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.hash.hasOwnProperty(val)) {
        this.hash[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }
    else {
        return false;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hash.hasOwnProperty(val)) {
        // if toBeRemove is not the last
        if ((this.arr.length-1) !== this.hash[val]) {
            var index = this.hash[val];
            var last = this.arr.pop();
            this.arr[index] = last; // update arr
            this.hash[last] = index; // update hash
        }
        // if toBeRemove is the last
        else {
            this.arr.pop();
        }
        delete this.hash[val];
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (this.arr.length === 0) return null;
    var index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


 /**
  * Initialize your data structure here.
  */
 var RandomizedSet = function() {
     this.hash = {};
     this.array = [];
 };

 /**
  * Inserts a value to the set. Returns true if the set did not already contain the specified element.
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.insert = function(val) {
     var hash = this.hash;
     var array = this.array;
     if (hash[val] !== undefined) return false;
     array.push(val);
     hash[val] = array.length-1;
     return true;
 };

 /**
  * Removes a value from the set. Returns true if the set contained the specified element.
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.remove = function(val) {
     var hash = this.hash;
     var array = this.array;
     if (hash[val] === undefined) return false;
     var lastValue = array[array.length-1];
     var deletingIndex = hash[val];
     hash[lastValue] = deletingIndex;
     array[deletingIndex] = lastValue;
     delete hash[val];
     array.pop();
     return true;
 };

 /**
  * Get a random element from the set.
  * @return {number}
  */
 RandomizedSet.prototype.getRandom = function() {
     var array = this.array;
     var randomIndex = Math.floor(Math.random()*array.length);
     return array[randomIndex];
 };

 /**
  * Your RandomizedSet object will be instantiated and called as such:
  * var obj = Object.create(RandomizedSet).createNew()
  * var param_1 = obj.insert(val)
  * var param_2 = obj.remove(val)
  * var param_3 = obj.getRandom()
  */
