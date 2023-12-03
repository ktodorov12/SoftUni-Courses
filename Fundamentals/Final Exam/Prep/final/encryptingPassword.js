function solve(input) {
  let n = Number(input.shift());
  let pattern = /(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/;

  for (let i = 0; i < n; i++) {
    let line = input[i];
    let match = pattern.exec(line);

    if (match) {
      let nums = match[2];
      let letter = match[3];
      let upperLetter = match[4];
      let symbol = match[5];

      let password = nums + letter + upperLetter + symbol;
      console.log(`Password: ${password}`);
    } else {
      console.log("Try another password!");
    }
  }
}

solve([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
