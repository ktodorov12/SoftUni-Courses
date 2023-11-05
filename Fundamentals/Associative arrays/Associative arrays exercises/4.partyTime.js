function partyTime(info) {
  let end = info.indexOf("PARTY");
  let taken = info.slice(0, end);
  let vip = taken.filter((x) => !isNaN(x[0]));
  let reg = taken.filter((x) => isNaN(x[0]));
  taken = vip.concat(reg);
  let removed = info.slice(end + 1);

  removed.forEach((element) => {
    if (taken.includes(element)) {
      let ind = taken.indexOf(element);
      taken.splice(ind, 1);
    }
  });

  console.log(taken.length);
  taken.forEach((el) => console.log(el));
}

partyTime([
  "7IK9Yo0h",
  "6NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "6NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
