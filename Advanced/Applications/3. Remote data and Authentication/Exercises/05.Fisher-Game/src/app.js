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
  try {
    const response = await fetch(url);
    const data = await response.json();
    divCatches.replaceChildren(...data.map(createCard))
  } catch (error) {
    alert(error);
  }
}

function createCard(data) {
  let isDisabled;
  if (hasOwner(data._ownerId)) {
    isDisabled = false;
  } else {
    isDisabled = true;
  }
  const div = createElement(
    "div",
    { class: "catch" },
    createElement("label", {}, "Angler"),
    createElement("input", {
      type: "text",
      class: "angler",
      value: data.angler,
      disabled: isDisabled,
    }),
    createElement("label", {}, "Weight"),
    createElement("input", {
      type: "text",
      class: "weight",
      value: data.weight,
      disabled: isDisabled,
    }),
    createElement("label", {}, "Species"),
    createElement("input", {
      type: "text",
      class: "species",
      value: data.species,
      disabled: isDisabled,
    }),
    createElement("label", {}, "Location"),
    createElement("input", {
      type: "text",
      class: "location",
      value: data.location,
      disabled: isDisabled,
    }),
    createElement("label", {}, "Bait"),
    createElement("input", {
      type: "text",
      class: "bait",
      value: data.bait,
      disabled: isDisabled,
    }),
    createElement("label", {}, "Capture Time"),
    createElement("input", {
      type: "text",
      class: "captureTime",
      value: data.captureTime,
      disabled: isDisabled,
    }),
    createElement(
      "button",
      { class: "update", id: data._id, disabled: isDisabled },
      "Update", onUpdate
    ),
    createElement(
      "button",
      { class: "delete", id: data._id, disabled: isDisabled },
      "Delete", onDelete
    )
  );

  return div
}

function hasOwner(id) {
  userData = JSON.parse(sessionStorage.getItem("user"));
  return userData?._id === id;
}

function createElement(type, attr, ...content) {
  const element = document.createElement(type);
  for (const item in attr) {
    if (item == "class") {
      element.classList.add(attr[item]);
    } else if (item == "disabled") {
      element.disabled = attr[item];
    } else {
      element[item] = attr[item];
    }
  }

  for (let item of content) {
    if (typeof item == "function") {
      element.addEventListener("click", item)
      continue
    }
    if (typeof item == "string" || typeof item == "number") {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }
  return element;
}

async function onDelete(e) {
  e.preventDefault();
  userData = JSON.parse(sessionStorage.getItem("user"));

  const id = e.target.id;
  makeOption("delete", url + id, userData.accessToken);
}

async function onUpdate(e) {
  userData = JSON.parse(sessionStorage.getItem("user"));
  const id = e.target.id;
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
