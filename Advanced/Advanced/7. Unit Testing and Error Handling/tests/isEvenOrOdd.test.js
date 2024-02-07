import { expect } from "chai";
import { isOddOrEven } from "../Exercises/2. evenOrOdd.js";

describe("Is even or odd", () => {
  it("Is not a string", () => {
    expect(isOddOrEven(5)).to.equal(undefined);
    expect(isOddOrEven([])).to.equal(undefined);
    expect(isOddOrEven({})).to.equal(undefined);
    expect(isOddOrEven()).to.equal(undefined);
  });

  it("Is is even", () => {
    expect(isOddOrEven("string")).to.equal("even");
  });

  it("It is odd", () => {
    expect(isOddOrEven("str")).to.equal("odd");
  });
});
