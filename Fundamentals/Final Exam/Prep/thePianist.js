function thePianist(info) {
  let numOfPieces = +info.shift();
  let piecesObj = {};

  for (let i = 0; i < numOfPieces; i++) {
    let [piece, composer, key] = info.shift().split("|");
    piecesObj[piece] = {};
    piecesObj[piece][composer] = key;
  }

  for (let command of info) {
    let tokens = command.split("|");
    let currCommand = tokens[0];
    let piece = tokens[1];

    if (currCommand === "Stop") break;

    if (currCommand === "Add") {

      if (piecesObj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        let composer = tokens[2];
        let key = tokens[3];

        piecesObj[piece] = {};
        piecesObj[piece][composer] = key;

        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }

    } else if (currCommand === "Remove") {
        
        if (piecesObj.hasOwnProperty(piece)) {
            delete piecesObj[piece]
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    } else if (currCommand === "ChangeKey") {

        if (piecesObj.hasOwnProperty(piece)) {
            let keyPiano = tokens[2];
            let composer = Object.keys(piecesObj[piece]).join('')
            
            piecesObj[piece][composer] = keyPiano;
            console.log(`Changed the key of ${piece} to ${keyPiano}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
  }

  Object.entries(piecesObj).forEach(el => {
    let piece = el[0];
    let tokens = Object.entries(el[1])

    console.log(`${piece} -> Composer: ${tokens[0][0]}, Key: ${tokens[0][1]}`);
  });
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  );
