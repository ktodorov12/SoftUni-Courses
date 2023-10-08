function factorialDivision(one, two) {
  function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  return (factorial(one) / factorial(two)).toFixed(2);
}

console.log(factorialDivision(5, 2));
