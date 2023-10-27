function cats(info) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cat = info.map((thisCat) => {
    let [name, age] = thisCat.split(" ");
    return new Cat(name, age);
  });

  cat.forEach((meow) => meow.meow());
}
cats(["Mellow 2", "Tom 5"]);
