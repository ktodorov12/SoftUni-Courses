function passwordGen(pass) {
  let first = pass[0];
  let second = pass[1];
  let word = pass[2];

  let concat = first.concat(second);
  let volews = "aeiou";

  let generatedPass = "";

  let firstLet = 0;

  for (let i = 0; i < concat.length; i++) {
    
    if (volews.includes(concat[i])) {
      let takenLet = word.substring(firstLet, firstLet + 1);
      generatedPass += takenLet.toUpperCase();
      firstLet++;
    } else {
      generatedPass += concat[i].toLowerCase();
    }

    if (firstLet === word.length) {
      firstLet = 0;
    }
  }

  let reversedPass = generatedPass.split("").reverse().join("");

  console.log(`Your generated password is ${reversedPass}`);
}

passwordGen(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
