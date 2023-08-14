function roadRader(speed, area) {
  let speedInKmh = Number(speed);
  switch (area) {
    case "motorway":
      if (speedInKmh <= 130) {
        console.log(`Driving ${speedInKmh} km/h in a 130 zone`);
      } else {
        let diffrence = speedInKmh - 130;
        if (speedInKmh > 130 && speedInKmh <= 150) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 130 - speeding`
          );
        } else if (speedInKmh > 150 && speedInKmh <= 170) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 130 - excessive speeding`
          );
        } else {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 130 - reckless driving`
          );
        }
      }
      break;
    case "interstate":
      if (speedInKmh <= 90) {
        console.log(`Driving ${speedInKmh} km/h in a 90 zone`);
      } else {
        let diffrence = speedInKmh - 90;
        if (speedInKmh > 90 && speedInKmh <= 110) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 90 - speeding`
          );
        } else if (speedInKmh > 110 && speedInKmh <= 130) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 90 - excessive speeding`
          );
        } else {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 90 - reckless driving`
          );
        }
      }
      break;
    case "city":
      if (speedInKmh <= 50) {
        console.log(`Driving ${speedInKmh} km/h in a 50 zone`);
      } else {
        let diffrence = speedInKmh - 50;
        if (speedInKmh > 50 && speedInKmh <= 70) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 50 - speeding`
          );
        } else if (speedInKmh > 70 && speedInKmh <= 90) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 50 - excessive speeding`
          );
        } else {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 50 - reckless driving`
          );
        }
      }
      break;
    case "residential":
      if (speedInKmh <= 20) {
        console.log(`Driving ${speedInKmh} km/h in a 20 zone`);
      } else {
        let diffrence = speedInKmh - 20;
        if (speedInKmh > 20 && speedInKmh <= 40) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 20 - speeding`
          );
        } else if (speedInKmh > 40 && speedInKmh <= 60) {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 20 - excessive speeding`
          );
        } else {
          console.log(
            `The speed is ${diffrence} km/h faster than the allowed speed of 20 - reckless driving`
          );
        }
      }
      break;
  }
}
roadRader(21, "residential");
