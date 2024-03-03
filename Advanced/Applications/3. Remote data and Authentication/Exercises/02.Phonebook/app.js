const url = "http://localhost:3030/jsonstore/phonebook";
const phonebook = document.getElementById("phonebook");
const personRef = document.getElementById("person");
const phoneRef = document.getElementById("phone");

attachEvents();
function attachEvents() {
  document.getElementById("btnLoad").addEventListener("click", loadContacts);
  document.getElementById("btnCreate").addEventListener("click", createContact);
}

async function createContact() {
  try {
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/js" },
      body: JSON.stringify({ person: personRef.value, phone: phoneRef.value }),
    });

    personRef.value = "";
    phoneRef.value = "";
    loadContacts();
  } catch (err) {
    alert(err);
  }
}

async function loadContacts() {
  phonebook.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).map(createLi);
  } catch (error) {}
}

async function deleteContact(event) {
  const elId = event.target.parentElement.dataset.id;
  try {
    await fetch(url + "/" + elId, {
      method: "delete",
    });
    loadContacts();
  } catch (error) {
    alert(err);
  }
}

function createLi(data) {
  const { phone, person, _id } = data;

  const li = document.createElement("li");
  li.textContent = `${person}: ${phone}`;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", deleteContact);
  li.appendChild(btn);
  phonebook.appendChild(li);
  li.dataset.id = _id;
}
