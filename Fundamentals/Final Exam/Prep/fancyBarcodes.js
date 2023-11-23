function solve(info) {
  let n = info.shift();
  let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

  for (let i = 0; i < n; i++) {
    let barcode = info[i];
    let match = barcode.match(pattern);

    if (match) {
      let numPattern = /[0-9]/g;
      let hasNums = match.join('').match(numPattern);

      if (hasNums) {
        console.log(`Product group: ${hasNums.join('')}`);
      } else {
        console.log("Product group: 00");
      }

    } else {
      console.log("Invalid barcode");
    }
  }
}

solve(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

