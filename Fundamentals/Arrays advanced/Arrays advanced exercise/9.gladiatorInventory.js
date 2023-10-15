function gladiatorInventory(input) {
  let inventory = input[0].split(" ");


  for (let i = 1; i < input.length; i++) {
    let [command, weapon] = input[i].split(" ");

    switch (command) {
      case "Buy":
        if (!inventory.includes(weapon)) {
          inventory.push(weapon);
        }
        break;

      case "Trash":
        if (inventory.includes(weapon)) {
          let indexWeapon = inventory.indexOf(weapon);
          inventory.splice(indexWeapon, 1);
        }
        break;

      case "Repair":
        if (inventory.includes(weapon)) {
          let indexWeapon = inventory.indexOf(weapon);
          let element = inventory.splice(indexWeapon, 1);
          inventory.push(element);
        }
        break;

      case "Upgrade":
        weapon = weapon.slice(0, weapon.length - 1)
        if (inventory.includes(weapon)) {
          let [a,b, upgrade] = input[i].split(" ");
          let indexWeapon = inventory.indexOf(weapon);
          inventory.splice(indexWeapon + 1, 0, `${weapon}:${upgrade}`);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD- Steel",
]);
