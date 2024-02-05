import { expect } from "chai";
import { sum } from "../Lab/4. sumOfNumbers.js";

describe("Test one", () => {
  it("given input is array", () => {
    expect(typeof sum([1, 2, 3])).to.equal("number");
    expect(sum([1, 2, 3])).to.equal(6);
  });

  it("s", () => {
    expect(Array.isArray(arr)).to.equal("array");
  });
});
