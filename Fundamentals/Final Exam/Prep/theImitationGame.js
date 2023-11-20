function theImitationGame(info) {
  let wordToDecypher = info.shift().split("");

  for (let command of info) {
    if (command === "Decode") break;

    let tokens = command.split("|");
    let typeCommand = tokens[0];

    if (typeCommand === "Move") {
      let movedTimes = Number(tokens[1]);

      while (movedTimes > 0) {
        let takenEls = wordToDecypher.shift();
        wordToDecypher.push(takenEls);
        movedTimes--;
      }

    } else if (typeCommand === "Insert") {
      let indx = Number(tokens[1]);
      let value = tokens[2];

      wordToDecypher.splice(+indx, 0, value);

    } else if (typeCommand === "ChangeAll") {
      let toReplace = tokens[1];
      let replacement = tokens[2];

      let idx = wordToDecypher.indexOf(toReplace);

      while (idx !== -1) {
        wordToDecypher.splice(idx, 1, replacement);
        idx = wordToDecypher.indexOf(toReplace);
      }
    }
  }

  console.log(`The decrypted message is: ${wordToDecypher.join("")}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
