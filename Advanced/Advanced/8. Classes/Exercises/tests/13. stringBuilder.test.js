import { expect } from "chai";
import { StringBuilder } from "../13. stringBuilder.js";

describe("String Builder", function () {
  //
  it("Throws error with wrong parameters", () => {
    expect(() => new StringBuilder(1)).to.throw();
  });

  it("Should word", () => {
    let subst = new StringBuilder("");
    expect(subst.toString()).to.equal("");
  });

  it("Sample test", () => {
    let str = new StringBuilder("hello");
    str.append(", there");
    str.prepend("User, ");
    str.insertAt("woop", 5);
    expect(str.toString()).to.equal("User,woop hello, there");
    str.remove(6, 3);
    expect(str.toString()).to.equal("User,w hello, there");
  });

  describe("Append method", () => {
    let subst;

    beforeEach(function () {
      subst = new StringBuilder("Hello");
    });

    it("Throws error with wrong parameters", () => {
      expect(() => subst.append(1)).to.throw();
      expect(() => subst.append()).to.throw();
    });

    it("Wroks properly with string", () => {
      subst.append(", Pete");
      expect(subst.toString()).to.equal("Hello, Pete");
    });

    it("Works properly with empty string", () => {
      subst.append("");
      expect(subst.toString()).to.equal("Hello");
    });
  });

  describe("Prepend method", () => {
    let subst;

    beforeEach(function () {
      subst = new StringBuilder("Hello");
    });

    it("Throws error with wrong parameters", () => {
      expect(() => subst.prepend(1)).to.throw();
      expect(() => subst.prepend()).to.throw();
    });

    it("Wroks properly with string", () => {
      subst.prepend("Hello, ");
      expect(subst.toString()).to.equal("Hello, Hello");
    });

    it("Works properly with empty string", () => {
      subst.prepend("");
      expect(subst.toString()).to.equal("Hello");
    });
  });

  describe("insertAt method", () => {
    let subst;

    beforeEach(function () {
      subst = new StringBuilder("Hello");
    });

    it("Passed arg is not a string", () => {
      expect(() => subst.insertAt(1, 1)).to.throw();
      expect(() => subst.insertAt(undefined, 1)).to.throw();
    });

    it("Passed arg is a string", () => {
      subst.insertAt("e", 1);
      expect(subst.toString()).to.equal("Heello");
    });

    it("Passed index is not a num", () => {
      subst.insertAt("e", "e");
      expect(subst.toString()).to.equal("eHello");
    });
  });

  describe("remove method", () => {
    let subst;

    beforeEach(function () {
      subst = new StringBuilder("Hello");
    });

    it("Removing elements", () => {
      subst.remove(0, 4);
      expect(subst.toString()).to.equal("o");
    });
  });

  describe("toString method", () => {
    let subst;

    beforeEach(function () {
      subst = new StringBuilder("Hello");
    });

    it("Return input is correct", () => {
      subst.append("Hello");
      expect(subst.toString()).to.equal("HelloHello");
    });
  });
});
