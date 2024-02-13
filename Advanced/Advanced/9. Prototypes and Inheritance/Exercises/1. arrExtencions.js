(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    return this.slice(n);
  };

  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };

  Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
  };

  Array.prototype.average = function () {
    if (this.length === 0) {
      return 0;
    }
    return this.sum() / this.length;
  };
  
})()
