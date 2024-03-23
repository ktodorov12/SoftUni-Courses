import { del, get, post, put } from "./requester.js";

const endpoints = {
  base: "/data/characters",
  allChars: "/data/characters?sortBy=_createdOn%20desc",
  endpointWithCharId: (id) => `/data/characters/${id}`,
};

export async function getAllChars() {
  return await get(endpoints.allChars);
}

export async function createChar(data) {
  return await post(endpoints.base, data);
}

export async function getDetailsChar(id) {
  return await get(endpoints.endpointWithCharId(id));
}

export async function editCharDetails(id, data) {
  return await put(endpoints.endpointWithCharId(id), data);
}

export async function deleteChar(id) {
  return await del(endpoints.endpointWithCharId(id));
}
