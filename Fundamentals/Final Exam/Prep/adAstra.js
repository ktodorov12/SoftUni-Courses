function adAstra(info) {
  let words = info.join("");
  let pattern =
    /([|#])(?<product>[A-Za-z ]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<kCal>\d+)\1/g;

  let match = [...words.matchAll(pattern)];

  let totalKCall = 0;

  for (let el of match) {
    let kCal = el.groups.kCal;
    totalKCall += +kCal;
  }

  let days = Math.floor(totalKCall / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  for (let el of match) {
    let { product, date, kCal } = el.groups;

    console.log(`Item: ${product}, Best before: ${date}, Nutrition: ${kCal}`);
  }
}

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);
