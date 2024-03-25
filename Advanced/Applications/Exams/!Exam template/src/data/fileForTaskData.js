import { del, get, post, put } from "./requester.js";

//TODO add endpoints
const endpoints = {
  allData: "",
  add: "",
  request: (id) => ``
};

//TODO rename functions
export async function allData() {
  return await get(endpoints.allData);
}

export async function addingData(data) {
  await post(endpoints.add, data);
}

export async function getDetails(id) {
  return await get(endpoints.request(id));
}

export async function edit(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteItem(id) {
  await del(id);
}
