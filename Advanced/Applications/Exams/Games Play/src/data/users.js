import { clearUserData, getUserData, setUserData } from "../util.js";
import { get, post } from "./requester.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(data) {
  const loginData = await post(endpoints.login, data);
  setUserData(loginData);
  updateNav();
}

export async function register(data) {
  const registerData = await post(endpoints.register, data);
  setUserData(registerData);
  updateNav();
}

export async function logout() {
  const promise = get(endpoints.logout);
  clearUserData();
  updateNav();
  await promise;
}

export function updateNav() {
  //TODO update the corresponding nav
  const userdata = getUserData();
  document.getElementById("user").style.display = userdata ? "inline-block" : "none";
  document.getElementById("guest").style.display = userdata ? "none" : "inline-block";
}
