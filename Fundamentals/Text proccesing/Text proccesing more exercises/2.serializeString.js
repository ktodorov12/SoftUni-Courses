function serializeString(text) {
  text = text.join("");
  let letters = {};

  for (let i = 0; i < text.length; i++) {

    if (!letters.hasOwnProperty(text[i])) {
      letters[text[i]] = {};
    }
    letters[text[i]][i] = i;
  }

  for (let [key, value] of Object.entries(letters)) {
    let nums = Object.keys(value);

    console.log(`${key}:${nums.join("/")}`);
  }
}

serializeString(["adbdo"]);
