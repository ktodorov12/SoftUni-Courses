import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/cyberpunk?sortBy=_createdOn%20desc",
  add: "/data/cyberpunk",
  request: (id) => `/data/cyberpunk/${id}`
};

export async function getMarketData() {
  return await get(endpoints.allData);
}

export async function addMarketData(data) {
  await post(endpoints.add, data);
}

export async function getMarketDetails(id) {
  return await get(endpoints.request(id));
}

export async function editMarket(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteItem(id) {
  await del(endpoints.request(id));
}
