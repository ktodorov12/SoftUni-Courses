function solve(input) {
  let message = input.shift();

  while (input[0] !== "Reveal") {
    let tokens = input[0].split(":|:");
    let operation = tokens[0];

    if (operation === "InsertSpace") {
      let indx = Number(tokens[1]);

      let first = message.slice(0, indx);
      let second = message.slice(indx);
      message = first + " " + second;
      
      console.log(message);

    } else if (operation === "Reverse") {
      let susbtring = tokens[1];

      if (!message.includes(susbtring)) {
        console.log("error");
        input.shift();
        continue;
      }

      let indexOfSubsr = message.indexOf(susbtring);
      let first = message.slice(0, indexOfSubsr);
      let second = message.slice(indexOfSubsr + susbtring.length);
      let reversed = susbtring.split("").reverse().join("");

      message = first + second + reversed;
      
      console.log(message);
    
    } else if (operation === "ChangeAll") {
      let substr = tokens[1];
      let replacement = tokens[2];

      let changes = message.split(substr);
      message = changes.join(replacement);

      console.log(message);
    }

    input.shift();
  }

  console.log(`You have a new text message: ${message}`);
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])
  