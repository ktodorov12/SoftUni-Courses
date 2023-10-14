function houseParty(arrInfo) {
  let guestList = [];

  for (let i = 0; i < arrInfo.length; i++) {
    let person = arrInfo[i].split(" ");
    let name = person[0];
    if (person.includes("not")) {
      if (guestList.includes(name)) {
        let nameIndex = guestList.indexOf(name);
        guestList.splice(nameIndex, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    }
  }
  console.log(guestList.join("\n"));
}

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
