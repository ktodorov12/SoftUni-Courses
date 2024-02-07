import { expect } from "chai";
import { mathEnforcer } from "../Exercises/4. mathEnforcer.js";

describe("Test for mathEnforcer", () => {
  describe("addFive", () => {
    it("Input is not number", () => {
      expect(mathEnforcer.addFive("5")).to.equal(undefined);
      expect(mathEnforcer.addFive([])).to.equal(undefined);
    });
    it("Input is number", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-1)).to.equal(4);
      expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    });
  });

  describe("subtractTen", () => {
    it("Input is not a number", () => {
      expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
      expect(mathEnforcer.subtractTen([])).to.equal(undefined);
    });
    it("Input is number", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
      expect(mathEnforcer.subtractTen(-5.5)).to.equal(-15.5);
    });
  });

  describe("sum", () => {
    it("Input is not a number", () => {
      expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
      expect(mathEnforcer.sum(5, "5")).to.equal(undefined);
    });
    it("Input is number", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it("Input is negative", () => {
      expect(mathEnforcer.sum(-5, 5)).to.equal(0);
      expect(mathEnforcer.sum(5, -5)).to.equal(0);
      expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
    });
    it("Input is float num", () => {
      expect(mathEnforcer.sum(5, 5.5)).to.equal(10.5);
      expect(mathEnforcer.sum(5.5, 5)).to.equal(10.5);
      expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
    });
  });
});
