const dealership = require("./03. Dealership/dealership");
const { expect } = require("chai");

describe(" Dealership Tests", () => {
  describe("newCarCost Tests", () => {
    it("if it has ownProperyModel should work ", () => {
      expect(dealership.newCarCost("Audi A4 B8", 20000)).to.equal(5000);
      expect(dealership.newCarCost("Audi A6 4K", 20000)).to.equal(0);
    });

    it("if it doesn't has ownProperyModel should return only newPrice ", () => {
      expect(dealership.newCarCost("Audi", 20000)).to.equal(20000);
    });
  });

  describe("carEquipment Tests", () => {
    it("if it has ownProperyModel should work ", () => {
      expect(dealership.carEquipment(['seat','wheel'],[0,1])).to.deep.equal(['seat','wheel']);

    });
  });

  describe("euroCategory Tests", () => {
    it("if its equal four should return  have added 5% discount to the final price: ${total}. ", () => {
      expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
    });
    it("if its more than four should return  have added 5% discount to the final price: ${total}. ", () => {
        expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
      });
      it("if its less than four ", () => {
        expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
      });
  });
});
