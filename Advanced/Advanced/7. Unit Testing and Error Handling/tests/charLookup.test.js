import { expect } from "chai";
import { lookupChar } from "../Exercises/3. charLookup.js";

describe("Test", () => {
  it("It is undefined", () => {
    expect(lookupChar(1, 1)).to.equal(undefined);
    expect(lookupChar("str", "str")).to.equal(undefined);
    expect(lookupChar("str", 5.5)).to.equal(undefined);
    expect(lookupChar([], 5)).to.equal(undefined);
    expect(lookupChar("str", [])).to.equal(undefined);
  });

  it("Index out of bounds", () => {
    expect(lookupChar("str", 3)).to.equal("Incorrect index");
    expect(lookupChar("str", 4)).to.equal("Incorrect index");
    expect(lookupChar("str", -1)).to.equal("Incorrect index");
  });

  it("Correct index", () => {
    expect(lookupChar("str", 1)).to.equal("t");
  });
});
