function test(shift) {
    const oneBitcoin = 11949.16;
    const oneGOfGold = 67.51;
  
    let purchasedBitcoin = 0;
    let goldMined = 0;
  
    let money = 0;
  
    let day = 0;
    let dayOfFirstBitcoin = 0;
  
    for (let days = 0; days < shift.length; days++) {
      goldMined = oneGOfGold * shift[days];
      day++;
      if (day % 3 === 0) {
        goldMined = 0;
        let reduced = shift[days] - shift[days] * 0.3;
        goldMined = oneGOfGold * reduced;
      }
      money += goldMined;
      while (money >= oneBitcoin) {
        purchasedBitcoin++;
        money = money - oneBitcoin;
        if (dayOfFirstBitcoin < 1) {
          dayOfFirstBitcoin = day;
        }
      }
    }
    console.log(`Bought bitcoins: ${purchasedBitcoin}`);
    if (dayOfFirstBitcoin > 0) {
      console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
  
    console.log(`Left money: ${money.toFixed(2)} lv.`);
  }