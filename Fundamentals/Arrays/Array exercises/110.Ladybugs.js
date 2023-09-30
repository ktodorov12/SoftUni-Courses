function ladybugs(array) {
  let fieldSize = array[0];
  let field = [];
  let ladybug = "ladybug";
  let empty = "empty";
  let positions = array[1].split(" ");

  for (let p = 0; p < fieldSize; p++) {
    field.push(empty);
    for (let j = 0; j <= p; j++) {
      if (p == positions[j]) {
        field[p] = ladybug;
      }
    }
  }

  for (let i = 2; i < array.length; i++) {
    let combined = array[i].split(" ");
    let index = Number(combined[0]);
    let command = combined[1];
    let flyight = Number(combined[2]);
    let traveledDistance;

    if (command == "right") {
      if (field[index] == ladybug) {
        field[index] = empty;
        traveledDistance = field[index + flyight];

        while (traveledDistance == ladybug) {
          flyight++;
          traveledDistance = field[index + flyight];
        }

        if (index + flyight >= field.length) {
        } else {
          field[flyight] = ladybug;
        }
      }
    } else if (command == "left") {
      if (field[index] == ladybug) {
        field[index] = empty;
        traveledDistance = field[index - flyight];

        while (traveledDistance == ladybug) {
          flyight++;
          traveledDistance = field[index - flyight];
        }

        if (index - flyight <= field.length) {
        } else {
          field[flyight] = ladybug;
        }
      }
    }
  }
  let str = "";
  for (let x = 0; x < field.length; x++) {
    if (field[x] === ladybug) {
      str += "1 ";
    } else if (field[x] === empty) {
      str += "0 ";
    }
  }
  console.log(str);
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);
