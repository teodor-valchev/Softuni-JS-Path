const isOddOrEven = require("./Even or Odd");
const lookupChar = require("./Char Lookup");
const mathEnforcer = require("./Math Enforcer");
const { expect } = require("chai");

describe("isOddOrEven test", () => {
  it("shouldnt work when the argument is not a string", () => {
    expect(isOddOrEven(2)).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven(true)).to.be.undefined;
  });

  it("should work when the argument is a even  string", () => {
    expect(isOddOrEven("pupe")).to.be.equal("even");
    expect(isOddOrEven("cars")).to.be.equal("even");
    expect(isOddOrEven("legs")).to.be.equal("even");
  });

  it("should work when the argument is a odd  string", () => {
    expect(isOddOrEven("pup")).to.be.equal("odd");
    expect(isOddOrEven("leg")).to.be.equal("odd");
    expect(isOddOrEven("car")).to.be.equal("odd");
  });
  it("should work with even or odd string", () => {
    expect(isOddOrEven("pup")).to.be.equal("odd");
    expect(isOddOrEven("legs")).to.be.equal("even");
  });
});
describe("lookupChar tests", () => {
  it("Shouldnt work when firstParameter is not a string", () => {
    expect(lookupChar(2, 3)).to.equal(undefined);
  });
  it("Shouldnt when firstParameter is obj ", () => {
    expect(lookupChar({}, 3)).to.equal(undefined);
  });
  it("Shouldnt work when secondParameter is not a number", () => {
    expect(lookupChar("pesho", "str")).to.equal(undefined);
  });
  it("Shouldnt work when secondParameter is obj", () => {
    expect(lookupChar("pesho", {})).to.equal(undefined);
  });
  it("Shouldnt work when index is bigger thans string", () => {
    expect(lookupChar("pesho", 7)).to.equal("Incorrect index");
  });
  it("Shouldnt work when index is negative", () => {
    expect(lookupChar("wes", -2)).to.equal("Incorrect index");
  });
  it("Shouldnt work when index is equal to the string", () => {
    expect(lookupChar("wes", 3)).to.equal("Incorrect index");
  });
  it("Should return char", () => {
    expect(lookupChar("pesho", 2)).to.equal("s");
  });
});
describe("MathEnforcer", () => {
  describe("addFive tests", () => {
    it("if parameter is not a number should return undefined", () => {
      expect(mathEnforcer.addFive("2")).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
    });

    it("Should work corectly with positive numbers", () => {
      expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });
    it("Should work corectly with negative numbers", () => {
      expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });
    it("Should work corectly with double numbers", () => {
      expect(mathEnforcer.addFive(2.5)).to.be.equal(7.5);
    });
  });
  describe("subtractTen tests", () => {
    it("if parameter is not a number should return undefined", () => {
      expect(mathEnforcer.subtractTen("15")).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });
    it("Should work corectly with positive numbers", () => {
      expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
    });
    it("Should work corectly with negativenumbers", () => {
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });
    it("Should work corectly with double numbers", () => {
      expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
    });
  });
  describe("sum tests", () => {
    it("Shouldnt work when first number is not a integer ", () => {
      expect(mathEnforcer.sum("2", 3)).to.be.undefined;
    });
  });
  it("Shouldnt work when second number is not a integer ", () => {
    expect(mathEnforcer.sum(2, "52")).to.be.undefined;
  });
  it("Should work with integers numbers ", () => {
    expect(mathEnforcer.sum(2, 2)).to.be.equal(4);
  });
  it("Should work with doubles numbers ", () => {
    expect(mathEnforcer.sum(2.5, 2.4)).to.be.equal(4.9);
  });
  it("Should work with negative numbers ", () => {
    expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
  });
});
