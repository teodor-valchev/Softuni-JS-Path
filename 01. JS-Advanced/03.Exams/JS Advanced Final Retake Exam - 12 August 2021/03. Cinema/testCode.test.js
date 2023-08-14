const cinema = require("./cinema");
const { expect } = require("chai");

describe("Cinema", () => {
  describe("Show Movies", () => {
    it("if array is Empty should return no movies", () => {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });
    it("Should work", () => {
      expect(cinema.showMovies(["red", "blue"])).to.deep.equal("red, blue");
    });
  });
  describe("Tickets price", () => {
    it("if there is a projection of the type normal", () => {
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
    });
    it("if there is a projection of the type premiere", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12);
    });
    it("if there is a projection of the type discount", () => {
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });
    it("if there is no type of peojection error", () => {
      expect(() => cinema.ticketPrice("pro")).to.throw(
        "Invalid projection type."
      );
    });
  });
  describe("SwapSeat", () => {
    it("if firstPlace is not a number or less than should return unsucseful", () => {
      expect(cinema.swapSeatsInHall("12", 3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall([], 3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(true, 3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(2, "12")).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3, [])).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(-2, 4)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3, -2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(25, 4)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3, 55)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(0, 2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3, 0)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(5, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("if there is a place should work", () => {
      expect(cinema.swapSeatsInHall(5, 3)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
