import { post } from "../utility/requester.js";
import { clearUserData, getUserData, saveUserData } from "../utility/userHelper.js";

const BASE_URL = "http://localhost:3030/users/";
const endpoints = {
  login: BASE_URL + "login",
  register: BASE_URL + "register",
  logout: BASE_URL + "logout",
};

export async function register(data) {
  const registeredData = await post(endpoints.register, data);
  saveUserData(registeredData);
}

export async function login(data) {
  const loginData = await post(endpoints.login, data);
  saveUserData(loginData);
}

export async function logout() {
  clearUserData();
}

export async function updateNav() {
  const userNav = document.getElementById("user");
  const guestNav = document.getElementById("guest");
  const logedUser = await getUserData();

  if(logedUser) {
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "inline-block";
  }
}
