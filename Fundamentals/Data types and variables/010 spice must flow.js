function mining(starting) {
  let totalAmaunt = 0; // of spice extracted from a source;
  let consumedByWorkers = 26;
  let days = 0;
  // starting yield - how much spice can be mined on the first day;
  while (starting >= 100) {
    totalAmaunt += starting;
    if (consumedByWorkers > totalAmaunt) {
      break;
    }
    starting -= 10;
    totalAmaunt -= consumedByWorkers;
    days++;
  }
  if (starting < 100 && totalAmaunt >= consumedByWorkers) {
    totalAmaunt -= consumedByWorkers;
  }
  console.log(days);
  console.log(totalAmaunt);
}

mining(450);
