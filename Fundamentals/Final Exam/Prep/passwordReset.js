function solve (info) {
    let password = info.shift();

    let commands = {
        TakeOdd,
        Cut,
        Substitute
    }

    for (let lines of info) {
        let tokens = lines.split(' ');
        let commandName = tokens[0];

        if (commandName === "Done") break;

        let command = commands[commandName];
        let valueA = tokens[1];
        let valueB = tokens[2]
        command(valueA, valueB)
    }

    console.log(`Your password is: ${password}`);

    function TakeOdd () {
        let odd = password.split('').filter((a, i) => i % 2 !== 0);
        password = odd.join('')
        console.log(password);
    }

    function Cut (index, length) {
        let first = password.slice(0, +index);
        let second = password.slice(+index + +length);

        password = first + second
        console.log(password);
    }

    function Substitute (substring, substitute) {
        if (!password.includes(substring)) {
            console.log("Nothing to replace!");
        } else {
            let toChange = password.split(substring).join(substitute);
            password = toChange;
            console.log(password);
        }
    }
}


solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
