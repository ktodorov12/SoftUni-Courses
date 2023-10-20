function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);
  let splicing = (array, index, amount) => array.splice(index, amount);

  for (let i = 0; i < input.length; i++) {
    let [command, index, value] = input[i].split(" ");
    index = Number(index);
    value = Number(value);
    let check = index >= 0 && index <= targets.length - 1;

    if (command === "End") {
      console.log(targets.join("|"));
    }

    switch (command) {
      case "Shoot":
        if (check) {
          targets[index] -= value;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;

      case "Add":
        if (check) {
          targets.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;

      case "Strike":
        let strikeLeft = index - value;
        let strikeRight = index + value;
        let leftRightCheck = strikeLeft >= 0 && strikeRight < targets.length;

        if (check && leftRightCheck) {
          splicing(targets, index, 1);
          splicing(targets, strikeRight - (value + 1), value);
          splicing(targets, strikeLeft, value);
        } else {
          console.log(`Strike missed!`);
        }
        break;
    }
  }
}

movingTarget(["1 1 1 1 1 0 1 1 1 1 1", "Strike 5 5", "End"]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
