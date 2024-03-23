import { clearUserData, setUserData } from "../util";
import { post } from "./requester";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(data) {
  const loginData = await post(endpoints.login, data);
  setUserData(loginData);
}

export async function register(data) {
  const registerData = await post(endpoints.register, data);
  setUserData(registerData);
}

export async function logout() {
  const promise = get(endpoints.logout);
  clearUserData();
  await promise;
}

export function updateNav() {
  //TODO update the corresponding nav
}
