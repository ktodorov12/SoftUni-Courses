function phoneBook(info) {
  let phoneB = {};

  for (let contact of info) {
    let [name, number] = contact.split(" ");

    phoneB[name] = number
  }

  for (let contact of Object.entries(phoneB)){
    console.log(contact.join(' -> '));
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
