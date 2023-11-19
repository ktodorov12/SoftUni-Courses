function race(info) {
  let names = info.shift().split(", ");
  let participants = {};

  names.forEach((name) => (participants[name] = 0));

  for (let word of info) {
    if (word === "end of race") break;

    let conditionName = /[A-Za-z]/g;
    let conditionNumber = /\d/g;

    let name = [...word.matchAll(conditionName)].join("");
    let nums = [...word.matchAll(conditionNumber)].reduce(
      (a, b) => Number(a) + Number(b)
    );

    if (participants.hasOwnProperty(name)) {
      participants[name] += nums;
    }
  }

  let sorted = Object.entries(participants);
  sorted.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
