import { allOrders } from "./allOrders.js";
import { buy } from "./buy.js";
import { create } from "./create.js";
import { updateRows } from "./updateRows.js";

// let [bought, total] = document.querySelectorAll(".orders p span");
// bought.textContent = "";
// total.textContent = "";

const logoutBtn = document.getElementById("logoutBtn");
const createBtn = document.querySelector("form button");
const buyBtn = document.querySelector(".table").nextElementSibling;
const allOrdersBtn = document.querySelector(".orders button");

createBtn?.addEventListener("click", create);
buyBtn?.addEventListener("click", buy);
logoutBtn?.addEventListener("click", onLogout);
allOrdersBtn?.addEventListener("click", allOrders);

function onLogout() {
  loadFurniture(true);
  sessionStorage.clear();
  window.location = "home.html";
}

loadFurniture();
async function loadFurniture(disabled) {
  const response = await fetch("http://localhost:3030/data/furniture");
  const data = await response.json();
  data.forEach((element) => {
    updateRows(element, disabled);
  });
}
