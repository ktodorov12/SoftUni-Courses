import { expect } from "chai";
import { recipeSelection } from "../Exams 2023/R.03 Unit Testing.js";

describe("Recipe Selection", function () {
  let subs;
  beforeEach(function () {
    subs = recipeSelection;
  });
  describe("isTypeSuitable function", () => {
    it("Should throw an error when passing first isnput as non-string", () => {
      expect(() => subs.isTypeSuitable(1, "Meat")).to.throw();
    });

    it("Should throw an error when passing second isnput as non-string", () => {
      expect(() => subs.isTypeSuitable("Meat", 1)).to.throw();
    });

    it("When the dieataryRestriction is Vegetarian and the type is Meat", () => {
      expect(subs.isTypeSuitable("Meat", "Vegetarian")).to.equal(
        "This recipe is not suitable for vegetarians"
      );
    });

    it("When the dieataryRestriction is Vegan the type is Dairy or Meat", () => {
      expect(subs.isTypeSuitable("Meat", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );

      expect(subs.isTypeSuitable("Dairy", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );
    });

    it("For any other combination", () => {
      expect(subs.isTypeSuitable("Meat", "Dairy")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(subs.isTypeSuitable("Vegan", "Vegetables")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });
  });

  describe("isItAffordable  function", () => {
    it("Throws an error when the first parameter is not a number", () => {
      expect(() => subs.isItAffordable("one", 1)).to.throw();
    });

    it("Throws an error when the second parameter is not a number", () => {
      expect(() => subs.isItAffordable(1, "one")).to.throw();
    });

    it("When the budget is lower than the price", () => {
      expect(subs.isItAffordable(100, 50)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
    });

    it("When the budget is higher than the price", () => {
      expect(subs.isItAffordable(50, 100)).to.equal(
        `Recipe ingredients bought. You have 50$ left`
      );
    });
  });

  describe("getRecipesByCategory function", () => {
    it("Throws an error when the first parameter is not an array", () => {
      expect(() => subs.getRecipesByCategory(1, "Asian")).to.throw();
    });

    it("Throws an error when the second parameter is not a string", () => {
      expect(() => subs.getRecipesByCategory([ { title: "Spicy Tofu Stir-Fry", category: "Asian" }], 1)).to.throw();
    });

    it("return filtered array that corresponds to the category", () => {
      const arr = [
        { title: "Spicy Tofu Stir-Fry", category: "Asian" },
        { title: "Banitsa", category: "Bulgarian" },
      ];

      expect(subs.getRecipesByCategory(arr, "Bulgarian")).to.equal(["Banitsa"]);
    });
  });
});
