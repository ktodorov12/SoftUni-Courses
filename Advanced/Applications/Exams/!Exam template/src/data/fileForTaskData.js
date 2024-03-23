import { del, get, post, put } from "./requester.js";

//TODO add endpoints
const endpoints = {};

//TODO rename function name and add endpoint and logic
export async function allData() {
  return await get();
}

export async function addingData(data) {
  await post();
}

export async function getDetails(id) {
  return await get();
}

export async function edit(id, data) {
  await put();
}

export async function del(id) {
  await del();
}
