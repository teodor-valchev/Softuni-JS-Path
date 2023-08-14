function factory(car) {
  let engine = {};
  let carriage = {};
  let newCar = {};

  if (car.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (car.power > 90 && car.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else {
    engine.power = 200;
    engine.volume = 3500;
  }

  if (car.carriage == "hatchback") {
    carriage.type = "hatchback";
    carriage.color = car.color;
  } else if (car.carriage == "coupe") {
    carriage.type = "coupe";
    carriage.color = car.color;
  }
  if (car.wheelsize % 2 == 0) {
    car.wheelsize--;
  }
  let wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
  newCar.model = car.model;
  newCar.engine = engine;
  newCar.carriage = carriage;
  newCar.wheels = wheels;
  return newCar;
}
factory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
