import { get, post } from "../utility/requester.js";
import { getUserData, removeUserData, setUsetData } from "../utility/userHelper.js";

const BASE_URL = "http://localhost:3030/users";
const endpoints = {
  register: "/register",
  login: "/login",
  logout: "/logout",
};

export async function register(data) {
  const postData = await post(BASE_URL + endpoints.register, data);
  setUsetData(postData);
}

export async function login(data) {
  const loginData = await post(BASE_URL + endpoints.login, data);
  setUsetData(loginData);
}

export async function logout() {
  get(BASE_URL + endpoints.logout);
  removeUserData();
}

export function updateNav() {
  const userNav = document.querySelectorAll(".user");
  const guestNav = document.querySelectorAll(".guest");
  userNav.forEach((e) => (e.style.display = "none"));
  const logedUser = getUserData();

  if (logedUser) {
    userNav.forEach((e) => (e.style.display = "inline-block"));
    guestNav.forEach((e) => (e.style.display = "none"));
  } else {
    guestNav.forEach((e) => (e.style.display = "inline-block"));
    userNav.forEach((e) => (e.style.display = "none"));
  }
}
