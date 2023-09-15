function expenses(lostFights, helmet, sword, shield, armor) {
  let helmTimes = 0;
  let swordTimes = 0;
  let shieldTimes = 0;
  let armorTimes = 0;
  let count = 0;
  for (let i = 0; i < lostFights; i++) {
    count++;
    if (count % 2 === 0) {
      helmTimes++;
    }
    if (count % 3 === 0) {
      swordTimes++;
    }
    if (count % 2 === 0 && count % 3 === 0) {
      shieldTimes++;
      if (shieldTimes % 2 === 0) {
        armorTimes++;
      }
    

    }
  }
  let total = (helmTimes * helmet) + (shieldTimes * shield) + 
  (sword * swordTimes) + (armor * armorTimes);
  
  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}

expenses(23, 12.50, 21.50, 40, 200);
