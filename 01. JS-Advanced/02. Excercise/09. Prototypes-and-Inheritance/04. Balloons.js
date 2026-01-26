function solve() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = Number(hasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = { color: ribbonColor, length: Number(ribbonLength) };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBallon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text + "asd";
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBallon: BirthdayBallon,
    };
}

let classes = solve();

let testBalloon = new classes.Balloon("yellow", 20.5);

let testPartyBalloon = new classes.PartyBalloon(
    "yellow",
    20.5,

    "red",
    10.25,
);

let ribbon = testPartyBalloon.ribbon;

const testBirthDayBallon = new classes.BirthdayBallon(
    "red",
    12,
    "yelloe",
    12,
    "ihaaa",
);

console.log(testBirthDayBallon);

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon);
