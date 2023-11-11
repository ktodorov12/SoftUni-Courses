function valueOfString(info) {
  let [text, typeOfCase] = info;
  let total = 0;

  let filtered = [];

  if (typeOfCase === "LOWERCASE") {

    filtered = text
      .split("")
      .filter(
        (letter) => letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122
      );

    filtered.forEach((letter) => (total += letter.charCodeAt()));
    
  } else if (typeOfCase === "UPPERCASE") {

    filtered = text
      .split("")
      .filter(
        (letter) => letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90
      );

    filtered.forEach((letter) => (total += letter.charCodeAt()));
  }

  console.log(`The total sum is: ${total}`);
}

valueOfString(["AC/DC", "UPPERCASE"]);
