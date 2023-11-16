function matchName (input) {
    let condition = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g

    let matches = input.match(condition)

    console.log(matches.join(' '));
}

matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")