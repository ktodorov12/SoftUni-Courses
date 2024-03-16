export async function getUserData() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export async function saveUserData(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export async function clearUserData() {
  sessionStorage.removeItem("user");
}

export function getUserToken() {
  const userData = getUserData();
  return userData.accessToken;
}

export function getUserId() {
  const userData = getUserData();
  return userData._id;
}

export function hasOwner(ownerId) {
  const id = getUserId();
  return ownerId === id;
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

    callback(Object.fromEntries(entries));
  };
}
