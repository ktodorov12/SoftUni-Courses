function revealWords(word, sentence) {
  let words = word.split(", ");

  let stars = words.map((word) => "*".repeat(word.length));

  for (let i = 0; i < sentence.length; i++) {
    if (sentence.includes(stars[i])) {
      sentence = sentence.replace(stars[i], words[i]);
    }
  }
  console.log(sentence);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
