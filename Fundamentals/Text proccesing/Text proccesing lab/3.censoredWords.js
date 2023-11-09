function censoredWords(sentence, word) {
  let stars = "*".repeat(word.length);

  while (sentence.indexOf(word) !== -1) {
    sentence = sentence.replace(word, stars);
    sentence.indexOf(word);

  }

  console.log(sentence);
}

censoredWords("A small sensmall small some words", "small");
