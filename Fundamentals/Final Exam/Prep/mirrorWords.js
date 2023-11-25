function solve(input) {
    input = input.join('')
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let matches = [...input.matchAll(pattern)];

    let mirror = [];
    for (let line of matches) {
        let firstWord = line[2];
        let secondWord = line[3].split('').reverse().join('');

        if(firstWord === secondWord) {
            mirror.push(`${firstWord} <=> ${line[3]}`)
        }
    }

    if (matches.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${matches.length} word pairs found!`);
    }

    if (mirror.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:`);
        console.log(mirror.join(', '));
    }
}

solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
