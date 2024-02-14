function createComputerHierarchy() {
  class Device {
    constructor(manufacturer) {
      if (this.constructor === Device) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.manufacturer = manufacturer;
    }
  }

  class Battery extends Device {
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = Number(expectedLife);
    }
  }

  class Keyboard extends Device {
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = Number(responseTime);
    }
  }

  class Monitor extends Device {
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = Number(width);
      this.height = Number(height);
    }
  }

  class Computer extends Device {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      super(manufacturer);
      if (this.constructor === Computer) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.processorSpeed = Number(processorSpeed);
      this.ram = Number(ram);
      this.hardDiskSpace = Number(hardDiskSpace);
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = Number(weight);
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      if (!(value instanceof Battery)) {
        throw new TypeError("Width must be a valid instance of Battery!");
      }
      this._battery = value;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      if (!(value instanceof Keyboard)) {
        throw new TypeError("Keyboard must be a valid Keyboard!");
      }
      this._keyboard = value;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      if (!(value instanceof Monitor)) {
        throw new TypeError("Monitor must be a valid Monitor!");
      }
      this._monitor = value;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}
