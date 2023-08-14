const library = require("./library/library");
const { assert, expect } = require("chai");

describe("library Tests", () => {
  describe("calcPriceOfBook tests", () => {
    it("nameBook should throw Exception when is int", () => {
      expect(() => library.calcPriceOfBook(1, 1900)).to.throw("Invalid input");
    });
    it("nameBook should throw Exception when is array", () => {
      expect(() => library.calcPriceOfBook([], 1900)).to.throw("Invalid input");
    });
    it("year should throw Exception when is not number", () => {
      expect(() => library.calcPriceOfBook("peshi", "re")).to.throw(
        "Invalid input"
      );
      expect(() => library.calcPriceOfBook("peshi", [])).to.throw(
        "Invalid input"
      );
      expect(() => library.calcPriceOfBook("peshi", true)).to.throw(
        "Invalid input"
      );
    });
    it("if year is under or equal to 1980 there should be a discount", () => {
      expect(library.calcPriceOfBook("rings", 1921)).to.equal(
        `Price of rings is 10.00`
      );
      expect(library.calcPriceOfBook("rings", 1980)).to.equal(
        `Price of rings is 10.00`
      );
    });
    it("if year is over 1980 there shouldnt be a discount", () => {
      expect(library.calcPriceOfBook("rings", 1999)).to.equal(
        `Price of rings is 20.00`
      );
    });
  });
  describe("findBook tests", () => {
    it("if array is 0 should throw exception", () => {
      expect(() =>
        library.findBook([], "pesho").to.throw("No books currently available")
      );
    });
    it("if there is a existing book should work", () => {
      expect(library.findBook(["pesho"], "pesho")).to.equal(
        "We found the book you want."
      );
    });
    it("if the book dont exist", () => {
      expect(library.findBook(["dimo"], "pesho")).to.equal(
        "The book you are looking for is not here!"
      );
    });
  });
  describe("arrangeBook tests", () => {
    it("if bookCount is diffrent from number should throw exception", () => {
      expect(() => library.arrangeTheBooks("bob")).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks([])).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks(false)).to.throw("Invalid input");
    });
    it("if bookCount is less than zero", () => {
      expect(() => library.arrangeTheBooks(-12)).to.throw("Invalid input");
    });
    it("if there is enough space should work", () => {
      expect(library.arrangeTheBooks(5)).to.equal(
        "Great job, the books are arranged."
      );
      expect(library.arrangeTheBooks(40)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("if there is not enough space should say that there is no space available", () => {
      expect(library.arrangeTheBooks(55)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
