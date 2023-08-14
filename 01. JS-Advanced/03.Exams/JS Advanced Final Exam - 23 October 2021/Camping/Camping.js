class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    if (
      condition !== "child" &&
      condition !== "student" &&
      condition !== "collegian"
    ) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (this.listOfParticipants.some((x) => x["name"] == name)) {
      return `The ${name} is already registered at the camp.`;
    }
    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    let participent = { name, condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participent);
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    let person = this.listOfParticipants.find((x) => x["name"] == name);

    if (person != undefined) {
      let index = this.listOfParticipants.indexOf(person);
      this.listOfParticipants.splice(index, 1);
      return `The ${name} removed successfully.`;
    }
    throw new Error(`The ${name} is not registered in the camp.`);
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    let person1 = this.listOfParticipants.find(
      (x) => x["name"] == participant1
    );
    let person2 = this.listOfParticipants.find(
      (x) => x["name"] == participant2
    );

    if (typeOfGame === "WaterBalloonFights") {
      if (person1 && person2 == undefined) {
        throw  new Error(`Invalid entered name/s.`);
      }
      if (person1['condition']!== person2['condition']) {
        throw new Error (`Choose players with equal condition.`);
      }
      if(person1['power']>person2['power']){
        person1['wins']+=1;
        return `The ${person1['name']} is winner in the game ${typeOfGame}.`
      }
      else if(person2['power']>person1['power'])
      {
        person2['wins']+=1;
        return `The ${person2['name']} is winner in the game ${typeOfGame}.`
      }
      
    } else if (typeOfGame === "Battleship") {
      person1['power']+=20;
      return `The ${person1['name']} successfully completed the game ${typeOfGame}.`
    }
    return `There is no winner.`;
  }
  toString(){
    let firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    let result = [];
    result.push(firstLine);

    for (const participent of this.listOfParticipants.sort((a,b)=>b['wins']-a['wins'])) {
      result.push(`${participent['name']} - ${participent[`condition`]} - ${participent[`power`]} - ${participent[`wins`]}`)
    }
  return result.join('\n');
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




