function reverse(word) {
    word = String(word);
    let array = [];
    for (let i = 0; i < word.length; i++) {
      array.push(word[i]);
    }
    let reversed = array.reverse();
    let joined = array.join("");
    console.log(joined);
  }
  reverse("SoftUni")