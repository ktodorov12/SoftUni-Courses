import { del, get, post, put } from "./requester.js";

const endpoints = {
  allFruits: "/data/fruits?sortBy=_createdOn%20desc",
  fruit: "/data/fruits",
  request: (id) => `/data/fruits/${id}`,
  search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22` 
};

export async function getAllFruits() {
  return await get(endpoints.allFruits);
}

export async function addFruit(data) {
  await post(endpoints.fruit, data);
}

export async function getFruitDetails(id) {
  return await get(endpoints.request(id));
}

export async function editFruit(id, data) {
  await put(endpoints.request(id), data);
}

export async function delFruit(id) {
  await del(endpoints.request(id));
}

export async function searchFruit(query) {
  return await get(endpoints.search(query));
}
