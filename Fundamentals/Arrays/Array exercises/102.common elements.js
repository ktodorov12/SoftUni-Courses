function compare(one, two) {
  for (let char of one) {
    for (let el of two) {
      if (char === el) {
        console.log(char);
      }
    }
  }
}

compare(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
