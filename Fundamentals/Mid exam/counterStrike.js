function counterStrike(input) {
  let energy = input[0];
  let wonBattles = 0;

  for (let i = 1; i < input.length; i++) {
    let distance = input[i];

    if (distance === "End of battle") {
      console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
      break;
    } else {
      distance * 1;
    }

    if (energy - distance >= 0) {
      energy -= distance;
      wonBattles++;
    } else {
      console.log(
        `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`
      );
      break;
    }

    if (i % 3 === 0) {
      energy += wonBattles;
    }
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);

counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
