function pascalSplitter(text) {
  let arrWords = [];
  let currWord = "";

  for (let letter of text) {
    let code = letter.charCodeAt()
    if (code >= 65 && code <= 90) {
      arrWords.push(currWord);
      currWord = "";
      currWord += letter;
    } else {
      currWord += letter;
    }
  }
  arrWords.shift()
  console.log(arrWords.join(', '));
}

pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
