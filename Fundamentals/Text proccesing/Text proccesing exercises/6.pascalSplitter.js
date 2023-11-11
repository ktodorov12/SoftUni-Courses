function pascalSplitter(text) {
  let arrWords = [];
  let capitalLetter = 0;

  for (let i = 1; i < text.length; i++) {
    let singleWord = "";

    if (text[i].toUpperCase() === text[i]) {
      singleWord = text.substring(capitalLetter, i);
      arrWords.push(singleWord);
      capitalLetter = i;
    }
  }
  let lastWord = text.substring(capitalLetter);
  arrWords.push(lastWord);

  console.log(arrWords.join(', '));
}

pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
