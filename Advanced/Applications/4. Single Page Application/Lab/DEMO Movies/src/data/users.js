import { showView } from "../nav.js";
import { post } from "./request.js";
import { clearUserData } from "./util.js";

const host = "http://localhost:3030/users";

export async function register(email, password) {
  return post(host + "/register", { email, password });
}

export async function login(email, password) {
  return post(host + "/login", { email, password });
}

export async function logout() {
  clearUserData();
  showView("home");
}
