function shootForTheWin(input) {
  let shotTargets = input[0].split(" ").map(Number);
  let countOfShots = 0;

  for (let i = 1; i < input.length; i++) {
    let idx = input[i];

    if (idx === "End") {
      console.log(`Shot targets: ${countOfShots} -> ${shotTargets.join(" ")}`);
      break;
    }

    let indexOfShot = shotTargets[idx];

    if (indexOfShot != -1 && indexOfShot != undefined) {
      let tempEl = shotTargets[idx];
      shotTargets[idx] = -1;
      countOfShots++;

      shotTargets.forEach((x, i) => {
        if (x === -1) {
        } else if (x > tempEl) {
          shotTargets[i] = shotTargets[i] -= tempEl;
        } else if (x <= tempEl) {
          shotTargets[i] = shotTargets[i] += tempEl;
        }
      });
    }
  }
}

// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);

shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
