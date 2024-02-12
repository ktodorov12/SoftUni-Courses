import { expect } from "chai";
import { PaymentPackage } from "../12. paymentPackage.js";

describe("Payment Package", function () {
  //
  describe("Accessor name", function () {
    //
    it("Should throw Error with numbers", function () {
      expect(() => new PaymentPackage(1, 1)).to.throw();
    });

    it("Should throw Error with non-string", function () {
      expect(() => new PaymentPackage([], 1)).to.throw();
    });

    it("Should throw Error with empty string", function () {
      expect(() => new PaymentPackage("", 1)).to.throw();
    });
  });

  describe("Accessor value", function () {
    //
    it("Should throw Error with negative numbers", function () {
      expect(() => new PaymentPackage("name", -1)).to.throw();
    });

    it("Should throw Error with string", function () {
      expect(() => new PaymentPackage("name", "")).to.throw();
    });

    it("Should throw Error with object", function () {
      expect(() => new PaymentPackage("name", [])).to.throw();
    });
  });

  describe("Accessor VAT", function () {
    //
    it("Should throw Error with negative numbers", function () {
      let instance = new PaymentPackage("Jhon", 1000);
      expect(() => (instance.VAT = -1)).to.throw();
    });

    it("Should throw Error with non-number", function () {
      let instance = new PaymentPackage("Jhon", 1000);
      expect(() => (instance.VAT = [])).to.throw();
      expect(() => (instance.VAT = "")).to.throw();
    });
  });

  describe("Accessor active", function () {
    //
    it("Should throw Error with strings", () => {
      let instance = new PaymentPackage("Jhon", 1000);
      expect(() => (instance.active = "")).to.throw();
    });

    it("Should throw Error with numbers", () => {
      let instance = new PaymentPackage("Jhon", 1000);
      expect(() => (instance.active = 1)).to.throw();
    });

    it("Should throw Error with objects", () => {
      let instance = new PaymentPackage("Jhon", 1000);
      expect(() => (instance.active = [])).to.throw();
    });
  });

  describe("Function toString()", () => {
    //
    it("Return with 'active' set to true", () => {
      let instance = new PaymentPackage("Jhon", 100);
      const final = [
        `Package: Jhon`,
        `- Value (excl. VAT): 100`,
        `- Value (VAT 20%): 120`,
      ].join("\n");

      expect(instance.toString()).to.equal(final);
    });

    it("return with 'active' set to false", () => {
      let instance = new PaymentPackage("Jhon", 100);
      instance.active = false;
      const final = [
        `Package: Jhon (inactive)`,
        `- Value (excl. VAT): 100`,
        `- Value (VAT 20%): 120`,
      ].join("\n");

      expect(instance.toString()).to.equal(final);
    });
  });

  describe("Working values", () => {
    //
    it("Should show name", () => {
      const instance = new PaymentPackage("Jhon", 1000);
      expect(instance.name).to.equal("Jhon");
      expect(instance.value).to.equal(1000);
      expect(instance.VAT).to.equal(20);
      expect(instance.active).to.equal(true);
    });

    it("Should change values", () => {
      const instance = new PaymentPackage("Jhon", 1000);
      expect((instance.name = "Peter")).to.equal("Peter");
      expect((instance.value = 100)).to.equal(100);
      expect((instance.VAT = 40)).to.equal(40);
      expect((instance.active = false)).to.equal(false);
    });
  });
});
