function solve(arg) {
  let type = typeof arg;

  if (type !== "number")
    return console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );

  console.log((Math.pow(arg, 2) * Math.PI).toFixed(2));
}


solve(3)