function filterEmployees(data, criteria) {
  const parsedInput = JSON.parse(data);
  let employees = [];

  for (let employee of parsedInput) {
    if (criteria === "all") {
      employees.push(parsedInput);
      break;
    }

    const [keyCriteria, valueCriteria] = criteria.split("-");

    let valueEmployee = employee[keyCriteria];

    if (
      employee.hasOwnProperty(keyCriteria) &&
      valueEmployee == valueCriteria
    ) {
      employees.push(employee);
    }
  }

  function printResult() {
    employees.forEach((employee, i) => {
      let { first_name, last_name, email } = employee;

      console.log(`${i}. ${first_name} ${last_name} - ${email}`);
    });
  }
  printResult.call();
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
  "gender-Female"
);
