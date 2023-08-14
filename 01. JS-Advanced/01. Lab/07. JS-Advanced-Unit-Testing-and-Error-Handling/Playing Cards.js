function cardFactory(face, suit) {
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let suits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666 ",
    C: "\u2663 ",
  };
  let keys = Object.keys(suits);
  if (!(validFaces.includes(face) && keys.includes(suit.toUpperCase()))) {
    throw new Error("Error");
  }
  let card = {
    face,
    suit: suits[suit],
    toString() {
      console.log(`${this.face}${this.suit}`);
    },
  };
  card.toString();
}
cardFactory("2", "h");
