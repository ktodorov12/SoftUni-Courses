function getFibonator() {
  let firstNum = 0;
  let secondNum = 1;
  let result = 0;

  function increment() {
    result = secondNum + firstNum;
    firstNum = secondNum;
    secondNum = result;
    return firstNum;
  }

  return increment;
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
