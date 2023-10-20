function treasureHunt(info) {
  let initialLoot = info.shift().split("|");

  for (let i = 0; i < info.length; i++) {
    let summary = info[i].split(" ");
    let command = summary.shift();

    if (command === "Yohoho!") {
      break;
    } else if (command === "Loot") {
      let newArr = summary.filter((x) => !initialLoot.includes(x));
      for (let j = 0; j < newArr.length; j++) {
        initialLoot.unshift(newArr[j]);
      }
    } else if (command === "Drop") {
      let index = summary[0];
      let check = index >= 0 && index < initialLoot.length;
      if (check) {
        let removed = initialLoot.splice(index, 1);
        initialLoot.push(removed);
      }
    } else if (command === "Steal") {
      let count = Number(summary[0]);
      let index = initialLoot.length - (1 + count);
      let stolen = initialLoot.splice(index + 1, count);
      console.log(stolen.join(', '));
    }
  }

  let averageGain = initialLoot.map((x, i) => (x = initialLoot[i].length));
  let chestTotal = 0;
  for (let i = 0; i < averageGain.length; i++) {
    chestTotal += averageGain[i];
  }
  let average = chestTotal / averageGain.length;

  if (average > 0) {
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
