function solve(input) {
  let word = input.shift();

  while (input[0] !== "End") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];

    if (command === "Translate") {
      let char = tokens[1];
      let replacement = tokens[2];

      let substitution = word.split(char);
      word = substitution.join(replacement);
      console.log(word);
    
    } else if (command === 'Includes') {

        if (word.includes(tokens[1])) {
            console.log("True");
        } else {
            console.log("False");
        }
    
    } else if (command === "Start") {

        if (word.startsWith(tokens[1])) {
            console.log("True");
        } else {
            console.log("False");
        }
    
    } else if (command === "Lowercase") {
        let lower = word.toLowerCase();
        word = lower
        console.log(word);
    
    } else if (command === "FindIndex") {
        let char = tokens[1];
        let lastIdx = word.lastIndexOf(char);
        console.log(lastIdx);

    } else if (command === "Remove") {
        let start = Number(tokens[1]);
        let count = Number(tokens[2]);
        
        let first = word.slice(0, start);
        let removed = word.slice(start, count);
        let last = word.slice(start + count);

        word = first + last
        console.log(word);
    }
  }
}

solve(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])