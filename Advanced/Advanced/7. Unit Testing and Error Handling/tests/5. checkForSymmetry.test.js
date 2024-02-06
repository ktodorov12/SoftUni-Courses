import { expect } from "chai";
import { isSymmetric } from "../Lab/5. checkForSymmetry.js";

describe("Symmetryc test", () => {
  it("Is not symmetryx", () => {
    expect(isSymmetric("")).to.equal(false);
    expect(isSymmetric([1, "1"])).to.equal(false);
    expect(isSymmetric()).to.equal(false);
    expect(isSymmetric([1, 2, 3])).to.equal(false);
  });

  it("Is symmetryc", () => {
    expect(isSymmetric([1, 2, 1])).to.equal(true);
  });
});
