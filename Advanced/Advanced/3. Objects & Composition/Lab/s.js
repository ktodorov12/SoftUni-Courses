function fromJSONToHTMLTable(input) {
  let toArr = JSON.parse(input);
  let outputArr = ["<table>"];

  outputArr.forEach((obj) => outputArr.push(makeValueRow(obj)));
  outputArr.push("</table>");

  function makeKeyRow(toArr) {
    return "<tr><td>"
  }
  function makeValueRow(obj) {
    let start = makeKeyRow();
    
  }
  function escapeHtml(value) {

  }

  console.log(outputArr.join(`\n`));
}

fromJSONToHTMLTable(
  '[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'
);
