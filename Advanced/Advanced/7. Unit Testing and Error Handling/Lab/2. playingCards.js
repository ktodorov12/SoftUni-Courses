function solve(face, suit) {
  const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const validSuits = ["S", "H", "D", "C"];

  if (!validFaces.find((el) => el == face)) {
    throw new Error();
  }

  if (!validSuits.includes(suit)) {
    throw new Error();
  }

  let suitUtf = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  function toString() {
    return `${face}${suitUtf[suit]}`;
  }

  return {
    face,
    suit,
    toString,
  };
}

solve("1", "C");
