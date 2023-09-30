function dungeon(rooms) {
  let separate = rooms.join("").split("|");
  let health = 100;
  let coins = 0;
  let roomsPassed = 0;

  for (let i = 0; i < separate.length; i++) {
    let room = separate[i].split(" ");
    let item = room[0];
    let value = Number(room[1]);
    roomsPassed++;

    if (item === "potion") {
      health = health + value;

      if (health > 100) {
        let overhealed = health - 100;
        value = value - overhealed;
        health = 100;
      }

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);

    } else if (item === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
      
    } else {
      health -= value;

      if (health > 0) {
        console.log(`You slayed ${item}.`);
      } else {
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${roomsPassed}`);
        break;
      }
    }
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
