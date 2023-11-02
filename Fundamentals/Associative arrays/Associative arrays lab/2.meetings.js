function meetings(info) {
  let appointments = {};

  info.forEach((apts) => {
    let [day, name] = apts.split(" ");

    if (appointments.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      appointments[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });

  Object.entries(appointments).forEach((entry) =>
    console.log(entry.join(" -> "))
  );
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
