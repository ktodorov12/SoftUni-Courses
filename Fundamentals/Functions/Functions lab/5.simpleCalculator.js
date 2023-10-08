function simpleCalculator(numberOne, numberTwo, opperation) {
  switch (opperation) {
    case "multiply":
      return numberOne * numberTwo;
    case "divide":
      return numberOne / numberTwo;
    case "add":
      return numberOne + numberTwo;
    case "subtract":
      return numberOne - numberTwo;
  }
}

simpleCalculator(5, 5, "multiply");
