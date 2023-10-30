class Laptop {
  constructor(info, quality) {
    this.producer = info.producer;
    this.age = info.age;
    this.brand = info.brand;
    this.isOn = false;
    this.quality = Number(quality);
  }

  turnOn() {
    this.isOn = true;
    this.quality--;
  }

  turnOff() {
    this.isOn = false;
    this.quality--;
  }

  showInfo() {
    let obj = {};
    obj.producer = this.producer;
    obj.age = this.age;
    obj.brand = this.brand;
    return JSON.stringify(obj);
  }

  get price() {
    let age = this.age * 2;
    let quan = this.quality * 0.5;
    return 800 - age + quan;
  }
}

let laptop = new Laptop({ producer: "Dell", age: 2, brand: "XPS" }, 10);

laptop.turnOn();
laptop.turnOff();
laptop.turnOn();

console.log(laptop.showInfo());
