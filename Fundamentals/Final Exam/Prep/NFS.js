function NFS(input) {
  class Car {
    constructor(car, distance, fuel) {
      this.car = car;
      this.distance = Number(distance);
      this.fuel = Number(fuel);
    }

    Drive(tokens) {
      let car = tokens[1];
      let traveledDistance = Number(tokens[2]);
      let neededFuel = Number(tokens[3]);
      let chars = garage[car];

      if (chars.fuel < neededFuel) {
        console.log("Not enough fuel to make that ride");
      } else {
        garage[car].distance += traveledDistance;
        garage[car].fuel -= neededFuel;

        console.log(
          `${car} driven for ${traveledDistance} kilometers. ${neededFuel} liters of fuel consumed.`
        );

        if (garage[car].distance > 100000) {
          delete garage[car];
          console.log(`Time to sell the ${car}!`);
        }
      }
    }

    Refuel(tokens) {
      let car = tokens[1];
      let refueled = Number(tokens[2]);
      if (garage[car].fuel + refueled > 75) {
        refueled = 75 - garage[car].fuel;
      }
      garage[car].fuel += refueled
      console.log(`${car} refueled with ${refueled} liters`);
    }

    Revert(tokens) {
      let car = tokens[1];
      let kilometers = Number(tokens[2]);
      garage[car].distance -= kilometers;

      if (garage[car].distance < 10000) {
        garage[car].distance = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
  }
  let n = +input.shift();
  let garage = {};

  for (let i = 0; i < n; i++) {
    let line = input.shift();
    let [name, distance, fuel] = line.split("|");
    garage[name] = new Car(name, distance, fuel);
  }

  while (input[0] !== "Stop") {
    let tokens = input.shift().split(" : ");
    let name = tokens[1];
    let carsss = garage[name];
    carsss[tokens[0]](tokens);
  }

  for (let name in garage) {
    let chars = garage[name];

    console.log(`${name} -> Mileage: ${chars.distance} kms, Fuel in the tank: ${chars.fuel} lt.`);
  }
}

NFS([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  );
