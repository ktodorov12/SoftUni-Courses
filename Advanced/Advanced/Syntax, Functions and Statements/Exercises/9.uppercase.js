function solve(word) {
  let pattern = /\W/gm;
  word = word.split(pattern);

  let upper = [];
  word
    .filter((el) => el.trim())
    .map((el) => upper.push(el.toUpperCase()));

  console.log(upper.join(", "));
}

solve("Hi, how are you?");
