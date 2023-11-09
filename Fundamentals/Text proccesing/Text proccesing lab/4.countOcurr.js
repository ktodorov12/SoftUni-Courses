let countOcurr = (sentence, word) =>
  arrOf = sentence.split(" ").filter((x) => x === word).length;

console.log(countOcurr("This is a word and it also is a sentence", "is"));
