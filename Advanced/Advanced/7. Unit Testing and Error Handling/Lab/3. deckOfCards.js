function printDeckOfCards(cards) {
  let cardArr = [];

  cards.forEach((element) => {
    let face = element.slice(0, element.length - 1);
    let suit = element.slice(element.length - 1);
    let newCard = createCard(face, suit, element);
    cardArr.push(newCard);
  });

  console.log(cardArr.join(" "));

  function createCard(face, suit, input) {
    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const validSuits = ["S", "H", "D", "C"];

    if (!validFaces.find((el) => el == face)) {
      console.log(`Invalid card: ${input}`);
      return;
    }

    if (!validSuits.includes(suit)) {
      console.log(`Invalid card: ${input}`);
      return;
    }

    let suitUtf = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };
    return `${face}${suitUtf[suit]}`;
  }
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);
