function modernTimes(info) {
  let hasHashTag = info.split(" ").filter((word) => word.includes("#"));
  hasHashTag.forEach((word) => {
    let indx = word.indexOf("#");
    let string = word.substring(indx + 1);

    if (string.length >= 1) console.log(string);
  });
}

modernTimes("Nowadays everyone uses # to tag a speci#l word in #socialMedia");
