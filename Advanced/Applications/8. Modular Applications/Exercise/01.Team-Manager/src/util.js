export function setUserData(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export function getUserData() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export function clearUserData() {
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

export function isOwner(ownerId) {
  const currentUser = getUserId();
  return currentUser == ownerId;
}

export function createSubmitHandler(callback) {
  return function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);
    callback(Object.fromEntries(entries));
  };
}