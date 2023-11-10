function revealWords(word, sentence) {
  let words = word.split(", ");

  for (let word of words) {
    let stars = "*".repeat(word.length);
    sentence = sentence.replace(stars, word);
  }

  console.log(sentence);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
