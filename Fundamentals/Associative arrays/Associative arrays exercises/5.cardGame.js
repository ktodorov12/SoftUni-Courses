function cardGame(info) {
  let powerOfCard = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let typeOfCard = { S: 4, H: 3, D: 2, C: 1 };

  let players = {};

  for (let currPlayer of info) {
    let [name, cards] = currPlayer.split(": ");

    if (!players[name]) {
      players[name] = new Set(cards.split(", "));
    } else {
      cards.split(", ").forEach((card) => players[name].add(card));
    }
  }

  for (let player in players) {
    let cards = players[player];
    let value = 0;
    cards.forEach((card) => {
      let type = card.split("")[card.length - 1];
      let power = card.split(type)[0];

      power = powerOfCard[power];
      type = typeOfCard[type];
      value += power * type;
    });
    players[player] = value;
  }

  Object.entries(players).forEach((x) => console.log(`${x[0]}: ${x[1]}`));
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
