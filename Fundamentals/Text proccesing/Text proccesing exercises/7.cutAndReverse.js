function cutAndReverse(text) {
  let first = text
    .substring(0, text.length / 2)
    .split("")
    .reverse()
    .join("");

  let second = text
    .substring(text.length / 2)
    .split("")
    .reverse()
    .join("");

    console.log(first);
    console.log(second);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
