const sumOfNumbers = require("./Sum of Numbers");
const isSymmetric = require("./Check for Symmetry");
const rgbToHexColor = require("./RGB to Hex");
const createCalculator = require("./Add or Subtract");
const { assert } = require("chai");
const { expect } = require("chai");

describe("sumOfNumbers tests", () => {
  it("Sum an array should work", () => {
    assert.equal(sumOfNumbers([1.5, 1.5]), 3);
  });
  it("Sum an array should work with String", () => {
    assert.equal(sumOfNumbers(["2", "5", 2]), 9);
  });
  it("Sum an array shouldnt work with empty array", () => {
    assert.equal(sumOfNumbers([]), 0);
  });
  it("Sum an array should work with only one number", () => {
    assert.equal(sumOfNumbers(["1"]), 1);
  });
});

describe("Check for Symmetry Tests", () => {
  it("returns false for non-array arguement", () => {
    expect(isSymmetric(3)).to.be.false;
    expect(isSymmetric("abcba")).to.be.false;
    expect(isSymmetric("a")).to.be.false;
    expect(isSymmetric(3)).to.be.false;
  });

  it("returns true if array is symmetric with numbers", () => {
    expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("returns true if array is symmetric with strings", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    expect(isSymmetric(["a", "b", "c", "b", "a"])).to.be.true;
  });

  it("returns false if array is not symmetric", () => {
    expect(isSymmetric(1, 2, 1, 2)).to.be.false;
    expect(isSymmetric(["1", "2", "1", "2"])).to.be.false;
  });

  it("returns false if array is symmetric but with mixed data types", () => {
    expect(isSymmetric([1, 2, 2, "1"])).to.be.false;
  });
});

describe("Check for RGB to Hex", () => {
  it("should return undefined when red is not a num");
  {
    expect(rgbToHexColor("sde", 3, 5)).to.be.undefined;
  }
  it("should return undefined when red is negative");
  {
    expect(rgbToHexColor(-2, 3, 5)).to.be.undefined;
  }
  it("should return undefined when red is more than 255");
  {
    expect(rgbToHexColor(300, 3, 5)).to.be.undefined;
  }

  it("should return undefined when green is not a num");
  {
    expect(rgbToHexColor(2, "green", 5)).to.be.undefined;
  }
  it("should return undefined when green is negative");
  {
    expect(rgbToHexColor(3, -3, 5)).to.be.undefined;
  }
  it("should return undefined when green is more than 255");
  {
    expect(rgbToHexColor(2, 299, 5)).to.be.undefined;
  }

  it("should return undefined when blue is not a num");
  {
    expect(rgbToHexColor(2, 2, "blue")).to.be.undefined;
  }
  it("should return undefined when blue is negative");
  {
    expect(rgbToHexColor(3, 3, -5)).to.be.undefined;
  }
  it("should return undefined when blue is more than 255");
  {
    expect(rgbToHexColor(2, 5, 455)).to.be.undefined;
  }

  it("returns proper hex represantations", () => {
    expect(rgbToHexColor(66, 135, 245)).to.equal("#4287F5");
    expect(rgbToHexColor(5, 10, 18)).to.equal("#050A12");
    expect(rgbToHexColor(79, 9, 23)).to.equal("#4F0917");

    expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
    expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
    expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
  });
});

describe("Add Subtract Tests", () => {
  it("returns an object as a result of the function", () => {
    expect(typeof createCalculator()).to.equal("object");
  });

  it("contains the three functions add, subtract, get as properties", () => {
    const object = createCalculator();
    expect(object).haveOwnProperty("add");
    expect(object).haveOwnProperty("subtract");
    expect(object).haveOwnProperty("get");
  });

  it("gets properly", () => {
    const object = createCalculator();
    object.add(3);
    expect(object.get()).to.equal(3);
  });

  it("sums properly", () => {
    const object = createCalculator();
    object.add(3);
    object.add(3);
    expect(object.get()).to.equal(6);
    object.add(5);
    expect(object.get()).to.equal(11);
  });

  it("subtracts properly", () => {
    const object = createCalculator();
    object.add(3);
    object.subtract(2);
    expect(object.get()).to.equal(1);
    object.subtract(10);
    expect(object.get()).to.equal(-9);
  });

  it("calculates properly if a string represantation of a number is given", () => {
    const object = createCalculator();
    object.add("1");
    expect(object.get()).to.equal(1);
  });

  it("returns NaN if not a number or not a string represantation of a number is given", () => {
    const object = createCalculator();
    object.add("blah");
    expect(Number.isNaN(object.get())).to.be.true;
  });
});
