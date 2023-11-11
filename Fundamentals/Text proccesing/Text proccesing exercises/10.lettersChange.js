function lettersChange(text) {
  let words = text.split(" ");
  let total = 0;

  for (let word of words) {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    let number = Number(word.substring(1, word.length - 1));

    if (firstLetter.toUpperCase() === firstLetter) {
      number /= firstLetter.charCodeAt(0) - 64;
    } else {
      number *= firstLetter.charCodeAt(0) - 96;
    }

    if (lastLetter.toUpperCase() === lastLetter) {
      number -= lastLetter.charCodeAt(0) - 64;
    } else {
      number += lastLetter.charCodeAt(0) - 96;
    }

    total += number;
  }

  console.log(total.toFixed(2));
}

lettersChange("A12b s17G");
