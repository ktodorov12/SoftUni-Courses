function meetings(info) {
  let appointments = {};

  for (let app of info) {
    let [day, name] = app.split(" ");

    if (appointments.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
      continue;
    }
    appointments[day] = name;
    console.log(`Scheduled for ${day}`);
  }

  for (let [day, name] of Object.entries(appointments))
    console.log(`${day} -> ${name}`);
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
