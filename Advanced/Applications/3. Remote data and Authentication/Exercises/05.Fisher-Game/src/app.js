const guestDiv = document.querySelector("#guest");
const userDiv = document.querySelector("#user");

const logoutBtn = document.getElementById("logout");
const addBtn = document.querySelector(".add");
const loadBtn = document.querySelector(".load");
let userData = JSON.parse(sessionStorage.getItem("user"));

const usernameField = document.querySelector(".email span");
const divCatches = document.getElementById("catches");

const allDeleteBtns = document.querySelectorAll(".delete");
const allUpdateBtns = document.querySelectorAll(".update");

logoutBtn.addEventListener("click", logoutFun);
addBtn.addEventListener("click", addCatch);
loadBtn.addEventListener("click", onLoad);

const url = "http://localhost:3030/data/catches/";

async function logoutFun() {
  makeOption("get", "http://localhost:3030/users/logout", userData.accessToken);
  sessionStorage.clear();
  isUserLoged();
}

isUserLoged();
function isUserLoged() {
  userData = JSON.parse(sessionStorage.getItem("user"));

  if (!userData) {
    usernameField.textContent = "guest";
    userDiv.style.display = "none";
    guestDiv.style.display = "inline-block";
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
    usernameField.textContent = userData.email;
    userDiv.style.display = "inline-block";
    guestDiv.style.display = "none";
  }
}

async function addCatch(e) {
  e.preventDefault();
  userData = JSON.parse(sessionStorage.getItem("user"));

  const catchForm = document.getElementById("addForm");
  const formData = new FormData(catchForm);
  const data = Object.fromEntries(formData.entries());
  const check = Object.values(data).some((val) => val == "");

  if (check) {
    return;
  }
  makeOption("post", url, userData.accessToken, data);
  catchForm.reset();
}

async function onLoad(e) {
  e.preventDefault();
  divCatches.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.map(createCard);
  } catch (error) {
    alert(error);
  }
}

function createCard(data) {
  let disabled;
  if (hasOwner(data._ownerId)) {
    disabled = false;
  } else {
    disabled = true;
  }

  const div = document.createElement("div");
  div.classList.add("catch");
  div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" ${disabled ? "disabled" : ""} value="${data.angler}">
    <label>Weight</label>
    <input type="text" class="weight" ${disabled ? "disabled" : ""} value="${data.weight}">
    <label>Species</label>
    <input type="text" class="species" ${disabled ? "disabled" : ""} value="${data.species}">
    <label>Location</label>
    <input type="text" class="location" ${disabled ? "disabled" : ""} value="${data.location}">
    <label>Bait</label>
    <input type="text" class="bait" ${disabled ? "disabled" : ""} value="${data.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" ${disabled ? "disabled" : ""} value="${data.captureTime}">`;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.textContent = "Delete";
  delBtn.dataset.id = data._id;

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update");
  updateBtn.textContent = "Update";
  updateBtn.dataset.id = data._id;

  if (!hasOwner(data._ownerId)) {
    delBtn.disabled = true;
    updateBtn.disabled = true;
  }

  delBtn.addEventListener("click", onDelete);
  updateBtn.addEventListener("click", onUpdate);

  div.appendChild(delBtn);
  div.appendChild(updateBtn);

  divCatches.appendChild(div);
}

function hasOwner(id) {
  userData = JSON.parse(sessionStorage.getItem("user"));
  return userData?._id === id;
}

async function onDelete(e) {
  e.preventDefault();
  userData = JSON.parse(sessionStorage.getItem("user"));

  const id = e.target.dataset.id;
  makeOption("delete", url + id, userData.accessToken);
}

async function onUpdate(e) {
  userData = JSON.parse(sessionStorage.getItem("user"));
  const id = e.target.dataset.id;
  const inputs = e.target.parentElement.querySelectorAll("input");
  const body = {
    angler: inputs[0].value,
    weight: inputs[1].value,
    species: inputs[2].value,
    location: inputs[3].value,
    bait: inputs[4].value,
    captureTime: inputs[5].value,
  };
  if (Object.values(body).includes("")) {
    return;
  }
  
  makeOption("put", url + id, userData.accessToken, body);
}

async function makeOption(method, url, token, body) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: { "X-Authorization": token },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message)
    }
  } catch (error) {
    alert(error);
  }
}
