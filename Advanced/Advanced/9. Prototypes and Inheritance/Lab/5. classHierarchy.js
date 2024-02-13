function solve() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }

    get area() {
      return this.area;
    }

    changeUnits(newUnit) {
      this.units = newUnit;
    }

    _check(param) {
      switch (this.units) {
        case "cm":
          return param;
        case "m":
          return param / 10;
        case "mm":
          return param * 10;
      }
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units = "cm") {
      super(units);
      this._radius = radius;
    }

    get radius() {
      return this._check(this._radius);
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }

    toString() {
      let string = super.toString();
      return string + ` Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = width;
      this._height = height;
    }

    get width() {
      return this._check(this._width);
    }

    get height() {
      return this._check(this._height);
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      let string = super.toString();
      return (
        string +
        ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
      );
    }
  }

  let c = new Circle(5);
  console.log(c.area); // 78.53981633974483
  console.log(c.toString());

  let r = new Rectangle(3, 4, "mm");
  console.log(r.area); // 1200
  console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

  r.changeUnits("cm");

  console.log(r.area); // 12

  return {
    Circle,
    Figure,
    Rectangle,
  };
}

solve();
