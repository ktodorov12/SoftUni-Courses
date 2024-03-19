export function getUserData() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export function setUserData(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export function removeUserData() {
  sessionStorage.removeItem("user");
}

export function getUserId() {
  const userData = getUserData();
  return userData?._id;
}

export function getUserToken() {
  const userData = getUserData();
  return userData?.accessToken;
}

export function hasOwner(id) {
  const userId = getUserId();
  return userId == id;
}
