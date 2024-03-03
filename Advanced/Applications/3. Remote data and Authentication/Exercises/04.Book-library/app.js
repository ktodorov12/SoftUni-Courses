const url = "http://localhost:3030/jsonstore/collections/books";
const resultTbody = document.querySelector("tbody");
const headingForm = document.querySelector("form h3");

const titleInput = document.querySelector("input[name='title']");
const authorInput = document.querySelector("input[name='author']");

const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener("click", loadBooks);

const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", async (ev) => {
  ev.preventDefault();
  createNewBook({
    title: titleInput.value,
    author: authorInput.value,
  });
});

async function loadBooks(ev) {
  ev.preventDefault();
  resultTbody.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    Object.entries(data).map(appendBooks);
  } catch (error) {
    alert(error);
  }
}

function appendBooks(data) {
  const [idKey, { author, title }] = data;

  const tr = document.createElement("tr");
  tr.dataset.id = idKey;

  const tdAuthor = el("td", author);
  const tdTitle = el("td", title);
  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);

  const editBtn = el("button", "Edit");
  const deleteBtn = el("button", "Delete");

  editBtn.addEventListener("click", onEdit);
  deleteBtn.addEventListener("click", onDelete);

  tr.appendChild(editBtn);
  tr.appendChild(deleteBtn);
  resultTbody.appendChild(tr);
}

async function onEdit(e) {
  const saveBtn = el("button", "Save");
  saveBtn.addEventListener("click", onSave);

  const bookRef = e.target.parentElement;
  headingForm.textContent = "Edit " + headingForm.textContent;
  submitBtn.replaceWith(saveBtn);

  const [title, author] = bookRef.querySelectorAll("td");
  const data = {
    title: title.textContent,
    author: author.textContent,
    id: bookRef.dataset.id,
  };

  titleInput.value = data.title;
  authorInput.value = data.author;

  async function onSave() {
    try {
      await fetch(url + "/" + data.id, {
        method: "patch",
        body: JSON.stringify({ author: data.author, title: data.title }),
      });
    } catch (error) {
      alert(error);
    }
  }
}

async function onDelete(e) {
  const idBook = e.target.parentElement.dataset.id;
  try {
    await fetch(url + "/" + idBook, {
      method: "delete",
    });
    loadBooks();
  } catch (error) {
    alert(error);
  }
}

async function createNewBook(data) {
  const { title, author } = data;
  if (!title || !author) {
    return;
  }

  try {
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });
    form.reset();
  } catch (error) {
    alert(error);
  }
}

function el(type, cont) {
  const el = document.createElement(type);
  el.textContent = cont;
  return el;
}
