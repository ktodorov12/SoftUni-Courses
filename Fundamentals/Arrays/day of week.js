function week(number) {
  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurstday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let valid = number >= 1 && number <= 7;
  if (number % 1 === 0 && valid) {
    console.log(day[number - 1]);
  } else {
    console.log("Invalid day!");
  }
}
week(3);
