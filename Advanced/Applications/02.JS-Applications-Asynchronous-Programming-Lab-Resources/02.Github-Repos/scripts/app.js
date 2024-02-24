const output = document.getElementById("repos");

function loadRepos() {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url).then(onHeaders).then(onSuccess).catch(onError);
}
function createLiItem({ html_url, full_name }) {
  const item = document.createElement("li");

  const anchor = document.createElement("a");
  anchor.href = html_url;
  anchor.textContent = full_name;
  item.appendChild(anchor);

  return item;
}

function onHeaders(response) {
  if (!response.ok) {
    throw "Error";
  }

  return response.json();
}

function onSuccess(data) {
  output.replaceChildren(...data.map(createLiItem));
}

function onError(error) {
  output.textContent = error;
}
