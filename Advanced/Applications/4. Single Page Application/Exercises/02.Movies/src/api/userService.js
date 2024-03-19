import { get, post } from "../api/requester.js";
import { removeUserData, getUserData, setUserData } from "../util/userHelper.js";

const BASE_URL = "http://localhost:3030/users/";
const endpoints = {
  login: BASE_URL + "login",
  register: BASE_URL + "register",
  logout: BASE_URL + "logout",
};

export async function register(data) {
  const registeredData = await post(endpoints.register, data);
  setUserData(registeredData);
  updateNav();
}

export async function login(data) {
  const loginData = await post(endpoints.login, data);
  setUserData(loginData);
  updateNav();
}

export async function logout() {
  get(endpoints.logout);
  removeUserData();
  updateNav();
}

export function updateNav() {
  const userNav = document.querySelectorAll(".user");
  const guestNav = document.querySelectorAll(".guest");
  userNav.forEach((n) => (n.style.display = "none"));
  let welcomeMsg = document.getElementById("welcome-msg");
  const logedUser = getUserData();

  if (logedUser) {
    userNav.forEach((n) => (n.style.display = "inline-block"));
    guestNav.forEach((n) => (n.style.display = "none"));
    welcomeMsg.textContent = `Welcome, ${logedUser.email}`;
  } else {
    userNav.forEach((n) => (n.style.display = "none"));
    guestNav.forEach((n) => (n.style.display = "inline-block"));
    welcomeMsg.textContent = "Welcome, email";
  }
}
