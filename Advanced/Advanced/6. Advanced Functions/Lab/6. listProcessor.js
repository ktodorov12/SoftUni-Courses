function listProcessor(input) {
  let result = [];

  const commands = {
    add: (str) => result.push(str),
    remove: (str) => (result = result.filter((el) => el !== str)),
    print: () => console.log(result.join(",")),
  };

  input.forEach((element) => {
    const [command, string] = element.split(" ");
    commands[command](string);
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
