function stringSubstring(word, text) {
  text = text.toLowerCase().split(' ');
  let isNotFound = true;

  for (let letter of text) {
    if (letter === word) {
      console.log(word);
      isNotFound = false;
      break;
    }
  }

  if (isNotFound) console.log(`${word} not found!`);
}

stringSubstring("python", "JavaScript is the best Programming language");
