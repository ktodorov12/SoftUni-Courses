function add(initialSum = 0) {
  function result(num) {
    initialSum += num;
    return result;
  }

  result.toString = function () {
    return initialSum;
  };

  return result;
}
console.log(add(1));
