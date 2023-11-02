function addressBook(info) {
  info.sort((a, b) => a.localeCompare(b));
  let adress = Object.fromEntries(info.map((x) => x.split(":")));

  Object.entries(adress).forEach((entry) => console.log(entry.join(` -> `)));
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
