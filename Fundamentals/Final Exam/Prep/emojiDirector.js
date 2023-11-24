function solve(info) {
  let pattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
  let match = [...info.join("").matchAll(pattern)];

  let patternNums = /[0-9]/g;
  let numMatch = info.join("").match(patternNums);
  let treshold = numMatch.reduce((a, b) => +a * +b);

  let coolEmojis = [];

  for (let emoji of match) {
    let currEmoji = emoji[2];
    let coolnes = 0;

    for (let words of currEmoji) {
      let num = words.charCodeAt();
      coolnes += num;
    }

    if (coolnes >= treshold) {
      coolEmojis.push(emoji[0]);
    }
  }

  console.log(`Cool threshold: ${treshold}`);
  console.log(`${match.length} emojis found in the text. The cool ones are:`);
  coolEmojis.forEach((el) => console.log(el));
}

solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
