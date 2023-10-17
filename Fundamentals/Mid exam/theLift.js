function theLift(input) {
  let spaces = input[1].split(" ");
  let waitingPeople = input[0];
  let fullSpace = [];
  let emptySpace = false;
  let queuePeople = false;
  ////
  while (spaces.length > 0) {
    let fourMax = spaces[0];
    for (let i = 0; i < 4; i++) {
      if (waitingPeople <= 0 || fourMax >= 4) {
        break;
      }
      waitingPeople--;
      fourMax++;
    }

    spaces.shift();
    fullSpace.push(fourMax);
  }
  ////
  if (spaces.length > 0) {
    fullSpace.push(spaces.join(" "));
  }

  if (waitingPeople > 0) {
    queuePeople = true;
  } else if (waitingPeople <= 0) {
    emptySpace = true;
  }

  let packed = fullSpace.filter((x) => x === 4);
  let isPacked = packed.length === fullSpace.length

  if (emptySpace && isPacked) {
    console.log(fullSpace.join(" "));
  } else if (emptySpace) {
    console.log(`The lift has empty spots!\n${fullSpace.join(" ")}`);
  } else if (queuePeople) {
    console.log(
      `There isn't enough space! ${waitingPeople} people in a queue!\n${fullSpace.join(
        " "
      )}`
    );
  }
}

theLift([17, "0 0 0 0"]);
