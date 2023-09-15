function calculator(number, operator, anotherNumber) {
  let calculation = 0;
  if (operator == "+") {
    calculation = number + anotherNumber;
  } else if (operator == "-") {
    calculation = number - number;
  } else if (operator == "/") {
    calculation = number / anotherNumber;
  } else if (operator == "*") {
    calculation = number * anotherNumber;
  }
  console.log(calculation.toFixed(2));
}
calculator(5, "+", 10);
