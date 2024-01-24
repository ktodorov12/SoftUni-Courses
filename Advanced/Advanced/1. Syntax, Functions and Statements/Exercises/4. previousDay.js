function solve(year, month, day) {
  let currDate = new Date(year, month - 1, day - 1);
  let yy = currDate.getFullYear();
  let mm = currDate.getMonth() + 1;
  let dd = currDate.getDate();
  console.log(`${yy}-${mm}-${dd}`);
}

solve(2016, 1, 1);
