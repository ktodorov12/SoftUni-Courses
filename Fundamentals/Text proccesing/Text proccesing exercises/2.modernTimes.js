function modernTimes(info) {
  let hasHashTag = info
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1);

  hasHashTag.forEach((word) => {
    let string = word.substring(1);
    let onlyLet = true;

    for (let sr of string) {
      if (!isNaN(sr)) {
        onlyLet = false;
        break;
      }
    }

    if (onlyLet) console.log(string);
  });
}

modernTimes("Nowadays everyone uses # to tag a #speci2al word in #socialMedia");
