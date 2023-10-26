function convertToJSON(firstName, lastName, hairColor) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    hairColor,
  };

  let convrt = JSON.stringify(person);

  console.log(convrt);
}

convertToJSON("George", "Jones", "Brown");
