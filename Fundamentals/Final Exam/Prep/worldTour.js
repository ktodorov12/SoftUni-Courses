function worldTour(info) {
  let stops = info.shift();

  for (let currStop of info) {
    let tokens = currStop.split(":");
    let command = tokens[0];

    if (command === "Travel") break;

    if (command === "Add Stop") {
      let indx = tokens[1];
      let destination = tokens[2];

      let isValidIndex = indx >= 0 && indx < stops.length;

      if (isValidIndex) {
        let firstHalf = stops.substring(0, indx);
        let secondHalf = stops.substring(indx);

        stops = firstHalf + destination + secondHalf;
      }
      console.log(stops);

    } else if (command === "Remove Stop") {
      let startIndx = +tokens[1];
      let endIndx = +tokens[2];

      let isValidIndexes =
        startIndx >= 0 &&
        startIndx < stops.length &&
        endIndx >= 0 &&
        endIndx < stops.length;

      if (isValidIndexes) {
        let firstHalf = stops.substring(0, startIndx);
        let secondHalf = stops.substring(endIndx + 1);

        stops = firstHalf + secondHalf;
      }
      console.log(stops);

    } else if (command === "Switch") {
      let oldString = tokens[1];
      let newString = tokens[2];

      stops = stops.split(oldString).join(newString);

      console.log(stops);
    }
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
