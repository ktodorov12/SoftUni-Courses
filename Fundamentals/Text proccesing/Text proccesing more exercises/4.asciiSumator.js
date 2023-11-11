function asciiSumator(info) {
  let [first, second, text] = info;

  let start = Math.min(first.charCodeAt(), second.charCodeAt());
  let finish = Math.max(second.charCodeAt(), first.charCodeAt());

  let middleChars = [];

  for (let i = start + 1; i < finish; i++) {
    let letter = String.fromCharCode(i);
    middleChars.push(letter);
  }

  let total = 0; 

  for (let char of text) {

    if (middleChars.includes(char)) {
        total += char.charCodeAt()
    }
  }
  
  console.log(total);
}

asciiSumator([".", "@", "dsg12gr5653feee5"]);
