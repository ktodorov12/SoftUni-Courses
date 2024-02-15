import { expect } from "chai";
import { petAdoptionAgency } from "../Exams 2023/R3. petAdoptionAgency.js";

describe("Pet Adoption Agency", function () {
  //
  describe("isPetAvailable function", () => {
    describe("Incorrect input types", () => {
      let subst;
      this.beforeEach(() => {
        subst = petAdoptionAgency;
      });

      it("First parameter is not a string", () => {
        expect(() => subst.isPetAvailable(1, 1, true)).to.throw();
        expect(() => subst.isPetAvailable([], 1, true)).to.throw();
      });

      it("Second parameter is not a number", () => {
        expect(() => subst.isPetAvailable("Dog", "dog", true)).to.throw();
        expect(() => subst.isPetAvailable("Dog", [1], true)).to.throw();
      });

      it("Third parameter is not a boolean", () => {
        expect(() => subst.isPetAvailable("Dog", 1, "Dog")).to.throw();
        expect(() => subst.isPetAvailable("Dog", 1, null)).to.throw();
      });
    });

    describe("Behaviour with correct input types", () => {
      let subst;
      this.beforeEach(() => {
        subst = petAdoptionAgency;
      });

      it("When count is 0 or below", () => {
        expect(subst.isPetAvailable("dog", 0, true)).to.equal(
          `Sorry, there are no dog(s) available for adoption at the agency.`
        );
        expect(subst.isPetAvailable("dog", -1, true)).to.equal(
          `Sorry, there are no dog(s) available for adoption at the agency.`
        );
      });

      it("When vaccinated is set to true", () => {
        expect(subst.isPetAvailable("dog", 1, true)).to.equal(
          `Great! We have 1 vaccinated dog(s) available for adoption at the agency.`
        );
      });

      it("When vaccinated is set to false", () => {
        expect(subst.isPetAvailable("dog", 1, false)).to.equal(
          `Great! We have 1 dog(s) available for adoption, but they need vaccination.`
        );
      });
    });
  });

  describe("getRecommendedPets function", () => {
    describe("Incorrect input types", () => {
      let subst;
      this.beforeEach(() => {
        subst = petAdoptionAgency;
      });

      it("First parameter is not an a array", () => {
        expect(() => subst.getRecommendedPets(1, "fast")).to.throw();
      });

      it("Second parameter is not a string", () => {
        expect(() => subst.getRecommendedPets(["dog"], 1)).to.throw();
      });
    });

    describe("Behaviour when inputs are of the correct type", () => {
      let subst;
      let petObj;

      this.beforeEach(function () {
        subst = petAdoptionAgency;
        petObj = [
          {
            name: "Sharo",
            traits: "fast",
          },
          {
            name: "Masha",
            traits: "fast",
          },
        ];
      });

      it("When the pets mathc the trait", () => {
        expect(subst.getRecommendedPets(petObj, "fast")).to.equal(
          "Recommended pets with the desired traits (fast): Sharo, Masha"
        );
      });

      it("When there are no pets matching the trait", () => {
        expect(subst.getRecommendedPets(petObj, "strong")).to.equal(
          `Sorry, we currently have no recommended pets with the desired traits: strong.`
        );
      });
    });
  });

  describe("adoptPet", function () {
    it("should return a success message when adopting a pet", function () {
      const result = petAdoptionAgency.adoptPet("Whiskers", "Alice");
      expect(result).to.equal(
        "Congratulations, Alice! You have adopted Whiskers from the agency. Enjoy your time with your new furry friend!"
      );
    });

    it("should throw an error 'Invalid input' for non-string inputs", function () {
      expect(() => petAdoptionAgency.adoptPet(100, "Alice")).to.throw();
    });

    it("should throw an error 'Invalid input' for non-string inputs", function () {
      expect(() => petAdoptionAgency.adoptPet("Fluffy", 100)).to.throw();
    });
  });
});
