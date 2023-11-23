function plantDiscovery(info) {
  let count = +info.shift();
  let exhibition = {};

  for (let i = 0; i < count; i++) {
    let [flower, rarity] = info.shift().split("<->");
    makingFlowers(flower, rarity);
  }

  let commands = {
    Rate,
    Update,
    Reset,
  };

  for (let elemetns of info) {
    let tokens = elemetns.split(": ");
    let commandName = tokens[0];

    if (commandName === "Exhibition") break;

    let line = tokens[1].split(" - ");
    let flowerName = line[0];

    let flower = exhibition[flowerName];
    let command = commands[commandName];

    if (!exhibition.hasOwnProperty(flowerName)) {
      console.log("error");
      continue;
    }
    command(flower, line[1]);
  }

  function makingFlowers(flower, rarity) {
    let currFlower = {
      rarity: rarity,
      rating: [],
    };
    exhibition[flower] = currFlower;
  }
  function Rate(flower, newRating) {
    flower.rating.push(newRating);
  }
  function Update(flower, newRarity) {
    flower["rarity"] = +newRarity;
  }
  function Reset(flower) {
    flower.rating = [];
  }

  console.log("Plants for the exhibition:");
  for (let nameFlower in exhibition) {
    let flower = exhibition[nameFlower];
    let average = flower.rating.reduce((a, b) => +a + +b, 0);
    let amount = average / flower.rating.length;

    if (average === 0) amount = 0;

    console.log(
      `- ${nameFlower}; Rarity: ${flower.rarity}; Rating: ${amount.toFixed(2)}`
    );
  }
}

plantDiscovery([
  "4",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Woodii<->10",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Arnoldii - 5",
  "Reset: jfj",
  "Exhibition",
]);
