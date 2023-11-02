function addressBook(info) {
  let adress = info.map((x) => x.split(":"));

  adress.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

  let obj = Object.fromEntries(adress);

  Object.entries(obj).forEach((entry) => console.log(entry.join(` -> `)));
}

addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
