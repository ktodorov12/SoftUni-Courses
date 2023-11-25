function destinationMapper(info) {
  let pattern = /([=\/])(([A-Z][A-Za-z]{2,}))\1/g
  let valid = [...info.matchAll(pattern)];

  let totalPoints = 0;

  let destinations = [];

  if (valid !== null) {
    for (let el of valid) {
      totalPoints += el[2].length;
      destinations.push(el[2])
    }
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Haw=ai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
