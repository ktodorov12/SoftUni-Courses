function carWash(comands) {
  let clean = 0;

  for (let i = 0; i < comands.length; i++) {
    let curComand = comands[i];
    switch (curComand) {
      case "soap":
        clean += 10;
        break;
      case "water":
        clean += clean * 0.2;
        break;
      case "vacuum cleaner":
        clean += clean * 0.25;
        break;
      case "mud":
        clean -= clean * 0.1;
    }
  }

  console.log(`The car is ${clean.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
