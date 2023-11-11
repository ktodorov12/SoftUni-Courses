function deserializeString(info) {
  let newWord = [];

  for (let char of info) {
    if (char === "end") break;

    let letter = char[0];
    char = char.split("/");
    
    let firstNum = char[0].split(':')[1];
    newWord[firstNum] = letter

    for (let i = 1; i < char.length; i++) {
      if (!isNaN(char[i])) {
        let ind = Number(char[i]);
        newWord[ind] = letter;
      }
    }
    
  }

  console.log(newWord.join(""));
}

deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
