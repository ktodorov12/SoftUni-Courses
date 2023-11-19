function extractEmails(info) {
  let pattern = /^[A-Za-z0-9]+[.-]?\w+[.-]?\w@\w+[-.]?\w+[.-]?\w+\.\w+/g;

  let array = info.split(" ");

  for (let el of array) {
    let match = el.match(pattern);
    if (match) {
      console.log(match.join(""));
    }
  }
}

extractEmails("Please contact us at: support@github.com.");
