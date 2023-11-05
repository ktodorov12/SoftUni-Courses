function partyTime(info) {
  let end = info.indexOf("PARTY");
  let taken = info.slice(0, end).sort((a, b) => a.localeCompare(b));
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
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
