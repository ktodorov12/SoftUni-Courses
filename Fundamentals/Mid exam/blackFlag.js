function blackFlag(info) {
  let [days, amaunt, plunder] = info.map(Number);
  let total = 0;

  for (let i = 1; i <= days; i++) {
    total += amaunt;

    if (i % 3 === 0) {
      let extaPlund = amaunt / 2;
      total += extaPlund;
    }

    if (i % 5 === 0) {
      total = total - total * 0.3;
    }
  }
  if (total >= plunder) {
    console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
  } else {
    console.log(
      `Collected only ${((total / plunder) * 100).toFixed(2)}% of the plunder.`
    );
  }
}
blackFlag(["10", "20", "380"]);
