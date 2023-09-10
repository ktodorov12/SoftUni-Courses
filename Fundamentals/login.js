function login(username) {
  let trueUsername = username.shift();
  let guesses = 0;
  let password = trueUsername.split("").reverse().join("");
  // kod za poluchavane na username i password;
  for (let check of username) {
    // zapochvame da tursim vutre bez username dali ima suotvetstvie s parolata
    if (check !== password) {
      if (guesses >= 3) {
        console.log(`User ${trueUsername} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
      guesses++;
    } else if (check === password) {
      console.log(`User ${trueUsername} logged in.`);
      break;
    }
  }
}
