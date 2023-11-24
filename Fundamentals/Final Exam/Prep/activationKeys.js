function solve(info) {
  let rawKey = info.shift();

  while (info[0] !== "Generate") {
    let tokens = info[0].split(">>>");
    let command = tokens[0];

    if (command === "Contains") {
      let substring = tokens[1];

      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }

    } else if (command === "Flip") {
      let type = tokens[1];
      let startIndex = Number(tokens[2]);
      let endIndex = Number(tokens[3]);

      let firstHalf = rawKey.slice(0, startIndex);
      let middle = rawKey.slice(startIndex, endIndex);
      let lasthalf = rawKey.slice(endIndex);

      if (type === "Upper") {
        middle = middle.toUpperCase();
      } else if (type === "Lower") {
        middle = middle.toLowerCase();
      }
      rawKey = firstHalf + middle + lasthalf;
      console.log(rawKey);

    } else if (command === "Slice") {
      let startIndex = Number(tokens[1]);
      let endIndex = Number(tokens[2]);

      let firstHalf = rawKey.slice(0, startIndex);
      let lasthalf = rawKey.slice(endIndex);

      rawKey = firstHalf + lasthalf;
      console.log(rawKey);
    }

    info.shift();
  }

  console.log(`Your activation key is: ${rawKey}`);
}

solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
