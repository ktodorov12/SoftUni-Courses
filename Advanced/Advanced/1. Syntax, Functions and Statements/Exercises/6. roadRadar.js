function solve(speed, area) {
  let speedLimit = 0;

  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }

  let status = "";
  let speeding = speed - speedLimit;
  if (speed <= speedLimit)
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  else {
    if (speeding <= 20) status = "speeding";
    else if (speeding <= 40) status = "excessive speeding";
    else status = "reckless driving";
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}

solve(61, "residential");
