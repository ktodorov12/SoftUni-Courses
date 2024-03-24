import { del, get, post, put } from "./requester.js";

const endpoints = {
  base: "/data/motorcycles",
  all: "/data/motorcycles?sortBy=_createdOn%20desc",
  request: (id) => `/data/motorcycles/${id}`
};

export async function getAllMotorcycles() {
  return await get(endpoints.base);
}

export async function addingMotorcycle(data) {
  await post(endpoints.base, data);
}

export async function getDetailsMotorcycle(id) {
  return await get(endpoints.request(id));
}

export async function editMotorcycle(id, data) {
  await put(endpoints.request(id), data);
}

export async function delMotorcycle(id) {
  await del(endpoints.request(id));
}
