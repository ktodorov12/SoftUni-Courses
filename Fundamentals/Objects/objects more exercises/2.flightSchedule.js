function flightSchedule(info) {
  let [allFlights, changedStatuses, status] = info;
  let newFlights = {};

  for (let flight of allFlights) {
    let [numOfFlight, destination] = flight.split(" ");

    for (let changes of changedStatuses) {
      let [numOfChanged, status] = changes.split(" ");

      if (numOfFlight.includes(numOfChanged)) {
        newFlights[destination] = status;
      }
    }
  }

  if (status.join("") === "Ready to fly") {
    let changedFlights = Object.keys(newFlights);
    allFlights.forEach((fligh) => {
      let tokens = fligh.split(" ");
      tokens.shift();
      let destination = tokens.join(" ");

      if (!changedFlights.includes(destination)) {
        console.log(`{ Destination: '${destination}', Status: 'Ready to fly' }`);
      }
    });
  } else {
    Object.entries(newFlights).forEach((flight) => {
      console.log(`{ Destination: '${flight[0]}', Status: '${flight[1]}' }`);
    });
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
