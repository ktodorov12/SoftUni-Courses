import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/shoes?sortBy=_createdOn%20desc",
  add: "/data/shoes",
  request: (id) => `/data/shoes/${id}`,
  search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
};

export async function getAllShoes() {
  return await get(endpoints.allData);
}

export async function addShoe(data) {
  await post(endpoints.add, data);
}

export async function getShoeDetails(id) {
  return await get(endpoints.request(id));
}

export async function editShoe(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteShoe(id) {
  await del(endpoints.request(id));
}

export async function searchShoes(query) {
  return await get(endpoints.search(query));
}