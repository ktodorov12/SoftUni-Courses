import { expect } from "chai";
import { onlineStore } from "../Exams 2023/3. Online Store.js";

describe("Online Store", function () {
  let subst;
  beforeEach(function () {
    subst = onlineStore;
  });
  describe("Test for isProductAvailable function", () => {

    it("Should throw an error when the first parameter is not a string", () => {
      expect(() => subst.isProductAvailable(2, 2)).to.throw();
    });

    it("Should throw an error when the secon paramete is not a number", () =>{
        expect(() => subst.isProductAvailable("milk", "one")).to.throw();
    }); 

    it ("When the quantity is 0 or below", () => {
        expect(subst.isProductAvailable("milk", -1)).to.equal("Sorry, milk is currently out of stock.")
        expect(subst.isProductAvailable("milk", 0)).to.equal(`Sorry, milk is currently out of stock.`)
    });

    it("When the quantity is greater than 0", () => {
        expect(subst.isProductAvailable("milk", 1)).to.equal(`Great! milk is available for purchase.`);
    })
  });

  describe("Test for canAffordProduct function", () => {

    it("Validating both inputs as they need to be numbers", () => {
        expect(() => subst.canAffordProduct("one", 1)).to.throw();
        expect(() => subst.canAffordProduct(1, "one")).to.throw();
    });

    it("When the result of the function is below 0", () => {
        expect(subst.canAffordProduct(5, 1)).to.equal("You don't have sufficient funds to buy this product.")
    })

    it("When the result of the function is greater than 0", () => {
        expect(subst.canAffordProduct(1, 5)).to.equal(`Product purchased. Your remaining balance is $4.`)
    })


    it("When the result is equal to 0", () => {
        expect(subst.canAffordProduct(1, 1)).to.equal(`Product purchased. Your remaining balance is $0.`)
    })
  })

  describe("Test for getRecommendedProducts function", () => {
    const arr = [{name: "Camera", category: "Photography"}, {name: "Recorder", category: "Photography"}];

    it("Throws an error when the first input is not an array", () => {
        expect(() => subst.getRecommendedProducts("1", "1")).to.throw();
    });

    it("Throws an error when the second input is not a string", () => {
        expect(() => subst.getRecommendedProducts([], 1)).to.throw();
    });

    it("Finds a match between the product and the passed category", () => {
        expect(subst.getRecommendedProducts(arr, "Photography")).to.equal(`Recommended products in the Photography category: Camera, Recorder`)
    });

    it("Does not find a match", () => {
        expect(subst.getRecommendedProducts(arr, "Driving")).to.equal(`Sorry, we currently have no recommended products in the Driving category.`)
    })
  });
});
