function employees(info) {
  class Personal {
    constructor(name) {
      this.name = name;
      this.persNum = name.length;
    }
  }

  let person = info.map((names) => new Personal(names));

  person.forEach((ind) => {
    console.log(`Name: ${ind.name} -- Personal Number: ${ind.persNum}`);
  });
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
