function buildAWall(input) {
  let info = input.map(Number);
  let smallestSection = Math.min(...info);

  let max = 30;
  let finalCost = 0;
  let arrConc = [];

  for (let i = smallestSection; i < 30; i++) {
    let usedConc = 0;
    if (info.includes(max)) {
      let index = info.indexOf(max);
      info.splice(index, 1);
    }

    for (let j = 0; j < info.length; j++) {
      info[j]++;
      usedConc += 195;
    }
    finalCost += usedConc * 1900;
    arrConc.push(usedConc);
  }
  console.log(arrConc.join(", "));
  console.log(`${finalCost} pesos`);
}

buildAWall([
  17, 22, 17, 19,

  17,
]);
