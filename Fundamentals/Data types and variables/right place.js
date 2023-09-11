function rightPlace(string, char, wholeString){
    let concatenatedString = string.replace("_", char);
    wholeString === concatenatedString ? console.log("Matched"): console.log("Not Matched")
}
rightPlace('Str_ng', 'I', 'Strong')