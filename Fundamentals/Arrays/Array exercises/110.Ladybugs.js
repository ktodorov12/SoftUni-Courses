function ladybugs(array) {
  let fieldSize = array[0];
  let field = [];
  let positions = array[1].split(" ");
  //filling aray
  for (let p = 0; p < fieldSize; p++) {
    field.push(0);
    for (let j = 0; j < fieldSize; j++) {
      if (p == positions[j]) {
        field[p] = 1;
      }
    }
  }

  for (let i = 2; i < array.length; i++) {
    let [index, command, flyight] = array[i].split(' ')
    index = Number(index);
    flyight = Number(flyight);

    if (field[index] !== 1 || index < 0 || index >= field.length) {
      continue;
    }
    //negative step
    if (flyight < 0) {
      flyight = flyight * -1;
      if (command == "right") {
        command = "left";
      } else {
        command = "right";
      }
    }
    // removing taken index
    if (field[index] === 1) {
      field[index] = 0;
    }
    //command right
    if (command === "right") {
      let traveledDistance = index + flyight;

      if (field[traveledDistance] === 1) {
        traveledDistance = traveledDistance + flyight;
      }

      if (traveledDistance < field.length) {
        field[traveledDistance] = 1;
      }
      //command left
    } else if (command == "left") {
      let traveledDistance = index - flyight;

      if (field[traveledDistance] === 1) {
        traveledDistance = traveledDistance - flyight;
      }

      if (traveledDistance >= 0) {
        field[traveledDistance] = 1;
      }
    }
  }

  console.log(field.join(" "));
}
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
