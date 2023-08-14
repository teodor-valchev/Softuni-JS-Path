const testNumbers = require("./03.Test Number/testNumbers");
const { expect } = require("chai");

describe("Test numbers", () => {
  describe("sum numbers tests", () => {
    it("if fisrst num is ohter type return undefind", () => {
      expect(testNumbers.sumNumbers("2", 4)).to.be.undefined;
      expect(testNumbers.sumNumbers({}, 4)).to.be.undefined;
      expect(testNumbers.sumNumbers(true, 4)).to.be.undefined;
    });
    it("if second num is ohter type return undefind", () => {
      expect(testNumbers.sumNumbers(10, [])).to.be.undefined;
      expect(testNumbers.sumNumbers(10, "-2")).to.be.undefined;
      expect(testNumbers.sumNumbers(10, "false")).to.be.undefined;
    });
    it("if numbers are correct should work", () => {
      expect(testNumbers.sumNumbers(10, 10)).to.equal("20.00");
    });
  });

  describe("number checker tests", () => {
    it("if input is even", () => {
      expect(testNumbers.numberChecker(10)).to.be.equal('The number is even!');
    });
    it("if input is odd", () => {
      expect(testNumbers.numberChecker(9)).to.equal('The number is odd!');
    });
  });
  describe("average sum  tests", () => {
    it("Should calc average sum in array", () => {
      expect(testNumbers.averageSumArray([4,6])).to.deep.equal(5)
    });
  });

});
