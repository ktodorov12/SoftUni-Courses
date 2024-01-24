function solve(number, ...input) {
  let commands = {
    chop(number) {
      return (number = number / 2);
    },
    dice(number) {
      return Math.sqrt(number);
    },
    spice(number) {
      return ++number;
    },
    bake(number) {
      return number * 3;
    },
    fillet(number) {
      return (number = number - number * 0.2);
    },
  };

  for (let i = 0; i < input.length; i++) {
    let com = input[i];
    let fn = commands[com];
    number = commands[com](+number);
    console.log(number);
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
