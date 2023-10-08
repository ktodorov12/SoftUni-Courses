function charactersInRange(one, two) {
  let isBigger = one.charCodeAt() > two.charCodeAt();
  let start = one.charCodeAt();
  let end = two.charCodeAt();
  if (isBigger) {
    start = two.charCodeAt();
    end = one.charCodeAt();
  }
  let chars = [];
  for (let i = start + 1; i < end; i++) {
    chars.push(String.fromCharCode(i));
  }
  console.log(chars.join(" "));
}

charactersInRange("a", "d");
