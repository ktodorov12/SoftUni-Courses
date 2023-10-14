function train(infoArray) {
  let passengers = infoArray[0].split(" ");
  let maxCapacity = Number(infoArray[1]);

  for (let i = 2; i < infoArray.length; i++) {
    let command = infoArray[i].split(" ");

    if (command[0] !== "Add") {
      let add = Number(command[0]);

      for (let j = 0; j < passengers.length; j++) {
        let currentWag = Number(passengers[j]);

        if (add + currentWag <= maxCapacity) {
          passengers[j] = add + currentWag;
          break;
        }
      }
    } else {
      passengers.push(command[1]);
    }
  }
  console.log(passengers.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
