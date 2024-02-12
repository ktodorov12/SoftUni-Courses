class Textbox {
  selector;
  _invalidSymbols;

  constructor(selector, pattern) {
    this.selector = selector;
    this._invalidSymbols = pattern;
    this._elements = document.querySelectorAll(this.selector);
  }

  get value() {
    return this._elements[0].value;
  }

  set value(input) {
    Array.from(this._elements).map((el) => {
      el.value = input;
    });
  }

  get elements() {
    return this._elements;
  }

  isValid() {
    let elements = Array.from(this._elements);

    for (let el of elements) {
      let value = el.value;

      if (value.match(this._invalidSymbols)) {
        return false;
      }
    }

    return true;
  }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
textbox.elements[0].value = "g";
let inputs = document.querySelectorAll(".textbox");

inputs.forEach((el) =>
  el.addEventListener("click", function () {
    console.log(textbox.value = "Jhon");
  })
);
