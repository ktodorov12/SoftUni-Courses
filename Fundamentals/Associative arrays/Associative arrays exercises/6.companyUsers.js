function companyUsers(info) {
  let users = {};

  info.forEach((comp) => {
    let [name, id] = comp.split(" -> ");

    if (!users[name]) {
      users[name] = new Set();
    }
    users[name].add(id);
  });

  let sorted = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));

  sorted.forEach((user) => {
    console.log(user[0]);
    user[1].forEach((id) => {
      console.log(`-- ${id}`);
    });
  });
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
