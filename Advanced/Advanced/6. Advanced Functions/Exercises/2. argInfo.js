function argInfo(...args) {
  let types = {};

  args.forEach((argument) => {
    const type = typeof argument;
    console.log(`${type}: ${argument}`);

    if (!types.hasOwnProperty(type)) {
      types[type] = 0;
    }

    types[type] += 1;
  });

  const sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);


  sorted.forEach((el) => {
    console.log(`${el[0]} = ${el[1]}`);
  });
}

argInfo({ name: 'bob'}, 3.333, 9.999);
