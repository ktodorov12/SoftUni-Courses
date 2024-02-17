import { expect } from "chai";
import { planYourTrip } from "../Exam 2024/3. Plan Your Trip.js";

describe("Plan Your Trip", function () {
  describe("•	choosingDestination function", () => {
    it("Throws an error when the year parameter is not 2024", () => {
      const subst = planYourTrip;
      expect(() => subst.choosingDestination("Ski Resort", "Winter", 1984)).to.throw("Invalid Year!");
    });

    it("Throws an error when the destionation is not Ski Resort", () => {
      const subst = planYourTrip;
      expect(() => subst.choosingDestination("Maldives", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
    });

    it("Throws error with undefined", () => {
      const subst = planYourTrip;
      expect(() => subst.exploreOptions(undefined, "Winter", 1220)).to.throw("Invalid Information!");
      expect(() => subst.exploreOptions("Ski Resort", undefined, 1220)).to.throw("Invalid Information!");
      expect(() => subst.exploreOptions("Ski Resort", "Winter", undefined)).to.throw("Invalid Information!");
    });

    it("When the season is Winter", () => {
      const subst = planYourTrip;
      expect(subst.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
    });

    it("When the season is not Winter", () => {
      const subst = planYourTrip;
      expect(subst.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
    });
  });

  describe("•	exploreOptions function", () => {
    it("Romoving element at certain index", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(subst.exploreOptions(activities, 2)).to.equal("Skiing, Snowboarding");
    });

    it("Throws an error when the first parameter is not an array", () => {
      const subst = planYourTrip;
      expect(() => subst.exploreOptions("skiing", 1)).to.throw("Invalid Information!");
    });

    it("Throws an error when the secont parameter is not a number", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(() => subst.exploreOptions(activities, "one")).to.throw("Invalid Information!");
    });

    it("Throws an error whit float numbers", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(() => subst.exploreOptions(activities, 1.5)).to.throw("Invalid Information!");
    });

    it("Throws an error with index lower than 0", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(() => subst.exploreOptions(activities, -1.5)).to.throw("Invalid Information!");
      expect(() => subst.exploreOptions(activities, -1)).to.throw("Invalid Information!");
    });

    it("Throws and error with index higher than arr length", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(() => subst.exploreOptions(activities, 5)).to.throw("Invalid Information!");
      expect(() => subst.exploreOptions(activities, 5.5)).to.throw("Invalid Information!");
    });

    it("Throws error with undefined", () => {
      const subst = planYourTrip;
      let activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      expect(() => subst.exploreOptions(activities, undefined)).to.throw("Invalid Information!");
      expect(() => subst.exploreOptions(undefined, 3)).to.throw("Invalid Information!");
    });
  });

  describe("•	estimateExpenses function", () => {
    it("When the total cost is less than 500", () => {
      const subst = planYourTrip;
      expect(subst.estimateExpenses(250, 1.5)).to.equal("The trip is budget-friendly, estimated cost is $375.00.");
      expect(subst.estimateExpenses(250, 2)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
    });

    it("When the total cost is more than 500", () => {
      const subst = planYourTrip;
      expect(subst.estimateExpenses(300, 3)).to.equal("The estimated cost for the trip is $900.00, plan accordingly.");
    });

    it("Throws an error when the first parameter is not a num", () => {
      const subst = planYourTrip;
      expect(() => subst.estimateExpenses("one", 3)).to.throw("Invalid Information!");
    });

    it("Throws an error when the first parameter is either 0 or negative", () => {
      const subst = planYourTrip;
      expect(() => subst.estimateExpenses(0, 3)).to.throw("Invalid Information!");
      expect(() => subst.estimateExpenses(-100, 3)).to.throw("Invalid Information!");
    });

    it("Throws an error when the second parameter is not a num", () => {
      const subst = planYourTrip;
      expect(() => subst.estimateExpenses(300, "three")).to.throw("Invalid Information!");
    });

    it("Throws an error when the second parameter is either 0 or negative", () => {
      const subst = planYourTrip;
      expect(() => subst.estimateExpenses(300, 0)).to.throw("Invalid Information!");
      expect(() => subst.estimateExpenses(100, -3)).to.throw("Invalid Information!");
    });

    it("Throws error with undefined", () => {
      const subst = planYourTrip;
      expect(() => subst.estimateExpenses(undefined, 3)).to.throw("Invalid Information!");
      expect(() => subst.estimateExpenses(3, undefined)).to.throw("Invalid Information!");
    });
  });
});
