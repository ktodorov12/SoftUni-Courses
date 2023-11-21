function destinationMapper(info) {
  let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g
  let valid = info.match(pattern);

  let totalPoints = 0;

  let destinations = [];

  if (valid !== null) {
    for (let el of valid) {
      el = el.split(/[=\/]/).join("");
      totalPoints += el.length;
      destinations.push(el)
    }
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Haw=ai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
