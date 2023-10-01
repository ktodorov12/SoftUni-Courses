function account(games) {
  let recievedGames = [];
  let inside = games[0].split(" ");

  for (let i = 0; i < inside.length; i++) {
    recievedGames.push(inside[i]);
  }

  for (let i = 1; i < games.length; i++) {
    if (games[i] === "Play!") {
      break;
    }

    let [command, game] = games[i].split(" ");
    let ind = recievedGames.indexOf(game);

    if (command === "Install") {

      if (recievedGames.includes(game)) {
      } else {
        recievedGames.push(game);
      }
      //Uninstall
    } else if (command === "Uninstall") {

      if (recievedGames.includes(game)) {
        recievedGames.splice(ind, 1);
      }
      //Update
    } else if (command === "Update") {

      if (recievedGames.includes(game)) {
        recievedGames.splice(ind, 1);
        recievedGames.push(game);
      }
      //Expansion
    } else if (command === "Expansion") {
      let expansion = game.split("-");
      ind = recievedGames.indexOf(expansion[0]) + 1;

      if (recievedGames.includes(expansion[0])) {
        recievedGames.splice(ind, 0, `${expansion[0]}:${expansion[1]}`);
      }
    }
  }
  console.log(recievedGames.join(' '));
}

account(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!']);
