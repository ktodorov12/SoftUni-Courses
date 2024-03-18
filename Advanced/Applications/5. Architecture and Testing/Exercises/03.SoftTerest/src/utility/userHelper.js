export function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

export function setUsetData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export function removeUserData() {
    localStorage.removeItem("user");
}

export function getUserToken() {
    const userData = getUserData();
    return userData?.accessToken;
  }

export function getUserId() {
    const userData = getUserData();
    return userData?._id;
}

export function hasOwner(ownerId) {
    const id = getUserId();
    return id == ownerId;
}