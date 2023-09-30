function dungeon(rooms) {
  let separate = rooms.join("").split("|");
  let health = 100;
  let coins = 0;
  let roomsPassed = 0;

  for (let i = 0; i < separate.length; i++) {
    let room = separate[i].split(" ");
    let item = room[0];
    let value = Number(room[1]);

    if (item === "potion") {
      health = health + value;

      if (health > 100) {
        let overhealed = health - 100;
        value = value - overhealed;
        health = 100;
      }

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);
      roomsPassed++;
    } else if (item === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
      roomsPassed++;
    } else {
      health -= value;

      if (health > 0) {
        roomsPassed++;
        console.log(`You slayed ${item}.`);
      } else {
        roomsPassed++;
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

dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
