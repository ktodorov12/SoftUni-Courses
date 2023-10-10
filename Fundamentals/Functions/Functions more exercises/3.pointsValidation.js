function pointsValidation(arr) {
  let [x1, y1, x2, y2] = arr;

  let mathOperation = (X1, Y1, X2, Y2) =>
    Math.sqrt((X2 - X1) * (X2 - X1) + (Y2 - Y1) * (Y2 - Y1));

  let printValid = (X1, Y1, X2, Y2) =>
    `{${X1}, ${Y1}} to {${X2}, ${Y2}} is valid`;
  let printInvalid = (X1, Y1, X2, Y2) =>
    `{${X1}, ${Y1}} to {${X2}, ${Y2}} is invalid`;

  let check = (X1, Y1, X2, Y2) =>
    Number.isInteger(mathOperation(X1, Y1, X2, Y2))
      ? console.log(printValid(X1, Y1, X2, Y2))
      : console.log(printInvalid(X1, Y1, X2, Y2));

  check(x1, y1, 0, 0);
  check(x2, y2, 0, 0);
  check(x1, y1, x2, y2);
}

pointsValidation([3, 0, 0, 4]);
