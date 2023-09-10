function test(base, increment) {
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisNeeded = 0;
    let goldNeeded = 0;
  
    let madeSteps = 0;
  
    for (let step = base; step >= 1; step -= 2) {
      
      madeSteps++;
      base -= 2;
      if (step === 1 || step === 2) {
        if (step === 2) {
          base = step;
        }
        let gold = base * base;
        goldNeeded = gold * increment;
        break;
      }
      let stone = base * base;
      stoneNeeded += stone * increment;
      if (madeSteps % 5 !== 0) {
        let marble = ((step * 4) - 4) * increment;
        marbleNeeded += marble;
      } else if (madeSteps % 5 === 0) {
        let lapis = ((step * 4) - 4) * increment;
        lapisNeeded += lapis;
      }
    }
    let height = madeSteps * increment;
  
    console.log(`Stone required: ${Math.round(stoneNeeded)}`);
    console.log(`Marble required: ${Math.round(marbleNeeded)} `);
    console.log(`Lapis Lazuli required: ${Math.round(lapisNeeded)}`);
    console.log(`Gold required: ${Math.round(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
  }
  