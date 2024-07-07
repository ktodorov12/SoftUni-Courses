const baseUrl = "http://localhost:3030";
const endpoints = {
  users: baseUrl + "/jsonstore/users",
  userAndId: (id) => baseUrl + "/jsonstore/users" + `/${id}`,
};

export async function getAllUsers() {
  const response = await fetch(endpoints.users);
  return response.json();
}

export async function createUser(data) {
  const body = createUserData(data);
  const response = await fetch(endpoints.users, {
    method: "POST",
    headers: { "Content-Type": "appication/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function editUser(data, id) {
  const body = createUserData(data);
  body._id = id;
  const response = await fetch(endpoints.userAndId(id), {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  return response.json();
}

export async function deleteUser(userId) {
  return fetch(endpoints.userAndId(userId), { method: "DELETE" });
}

function createUserData(data) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: data.imageUrl,
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };
}
