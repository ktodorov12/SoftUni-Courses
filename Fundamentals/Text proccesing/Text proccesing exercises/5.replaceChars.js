function replaceChars(text) {
  let word = text[0];

  for (let i = 1; i < text.length; i++) {
    let currWord = text[i];
    let prevWord = text[i - 1];

    if (currWord !== prevWord) {
      word += currWord;
    }
  }

  console.log(word);
}

replaceChars("aaaaabbbbbcdddeeeedssaa");
