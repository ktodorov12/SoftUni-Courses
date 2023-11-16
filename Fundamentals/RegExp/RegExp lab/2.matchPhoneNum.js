function matchPhoneNum([info]) {
  let condition = /\+359([ -])2\1\d{3}\1\d{4}/g;

  let matches = info.match(condition);

  console.log(matches.join(", "));
}

matchPhoneNum([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
