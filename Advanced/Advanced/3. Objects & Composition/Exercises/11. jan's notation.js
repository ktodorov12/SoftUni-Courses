function notation(instructions) {
  let saved = [];
  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  let isBreaked = false;

  for (let el of instructions) {
    if (typeof el === "number") saved.push(el);
    else {
      if (saved.length < 2) {
        isBreaked = true;
        break;
      }

      let second = saved.pop();
      let first = saved.pop();

      let newNum = operators[el](first, second);
      saved.push(newNum);
    }
  }

  if (isBreaked) console.log("Error: not enough operands!");
  else if (saved.length === 1) console.log(saved[0]);
  else console.log("Error: too many operands!");
}

notation([7, "-"]);
