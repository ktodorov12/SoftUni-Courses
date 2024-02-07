import { expect } from "chai";
import { createCalculator } from "../Lab/7. addSubstract.js";

describe("Tests", () => {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it("Has Properties", () => {
    expect(calc).to.have.property("add");
    expect(calc).to.have.property("subtract");
    expect(calc).to.have.property("get");

    expect(createCalculator().get()).to.equal(0);
  });

  it("Adds", () => {
    calc.add(5);
    calc.add("5");
    expect(calc.get()).to.equal(10);
  });

  it("Subtract", () => {
    calc.subtract(5);
    calc.subtract("5");
    expect(calc.get()).to.equal(-10);
  });
});
