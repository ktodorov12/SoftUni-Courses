// solution fetch/then
// const commits = document.getElementById("commits");

// function loadCommits() {
//   const username = document.getElementById("username").value;
//   const repo = document.getElementById("repo").value;
//   const url = `https://api.github.com/repos/${username}/${repo}/commits`;

//   fetch(url).then(onHandlers).then(onSuccess).catch(onError);
// }

// function onHandlers(response) {
//   if (!response.ok) {
//     throw new Error();
//   }

//   return response.json();
// }

// function onSuccess(data) {
//   commits.replaceChildren(...data.map(createLi));
// }

// function onError(error) {
//   commits.textContent = error
// }

// function createLi({ commit }) {
//   const name = commit.author.name;
//   const message = commit.message;

//   const li = document.createElement("li");
//   li.textContent = `${name}: ${message}`;

//   return li;
// }

//solution async/await
const commits = document.getElementById("commits");

async function loadCommits() {
  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = await response.json();
      throw message
    }

    const data = await response.json();
    commits.replaceChildren(...data.map(createLi));
  } catch (error) {
    commits.textContent = error.message;
  }
}

function createLi({ commit }) {
  const name = commit.author.name;
  const message = commit.message;

  const li = document.createElement("li");
  li.textContent = `${name}: ${message}`;

  return li;
}
