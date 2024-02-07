import { expect } from "chai";
import { rgbToHexColor } from "../Lab/6. rgbHex.js";

describe("Testing RGB", () => {
  it("Wrong tests", () => {
    expect(rgbToHexColor([])).to.equal(undefined);
    expect(rgbToHexColor({})).to.equal(undefined);
    expect(rgbToHexColor(1, 2, "3")).to.equal(undefined);
    expect(rgbToHexColor(0, 2, 256)).to.equal(undefined);
    expect(rgbToHexColor(-1, 2, 3)).to.equal(undefined);
  });

  it("Works", () => {
    expect(rgbToHexColor(1, 2, 3)).to.equal("#010203");
    expect(rgbToHexColor(2, 5, 255)).to.equal("#0205FF");
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
});
