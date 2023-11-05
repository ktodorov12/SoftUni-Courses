function piccolo(info) {
    let parking = {}

    for (let car of info) {
        let [command, plate] = car.split(', ')

        if (command === "IN") {
            parking[plate] = ''
        } else if (command === "OUT") {
            delete parking[plate]
        }
    }

    let plates = Object.keys(parking);

    if (plates.length > 0){
        console.log(plates.sort((a, b) => a.localeCompare(b)).join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
