function theImitationGame(info) {
  let wordToDecypher = info.shift();

  for (let command of info) {
    if (command === "Decode") break;

    let tokens = command.split("|");
    let typeCommand = tokens[0];

    if (typeCommand === "Move") {
      let timesToMove = +tokens[1];

      let toMove = wordToDecypher.substring(0, timesToMove);
      let rest = wordToDecypher.substring(timesToMove);

      wordToDecypher = rest + toMove;

    } else if (typeCommand === "Insert") {
      let indx = +tokens[1];
      let value = tokens[2];

      let substitution = wordToDecypher.split("");
      substitution.splice(indx, 0, value);
      wordToDecypher = substitution.join("");

    } else if (typeCommand === "ChangeAll") {
      let toChange = tokens[1];
      let replacement = tokens[2];

      wordToDecypher = wordToDecypher.replaceAll(toChange, replacement);
    }
  }

  console.log(`The decrypted message is: ${wordToDecypher}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
