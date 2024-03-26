import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/memes?sortBy=_createdOn%20desc",
  add: "/data/memes",
  request: (id) => `/data/memes/${id}`,
  ownMemes: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export async function getAllMemes() {
  return await get(endpoints.allData);
}

export async function addMeme(data) {
  await post(endpoints.add, data);
}

export async function getMemeDetails(id) {
  return await get(endpoints.request(id));
}

export async function editMeme(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteMeme(id) {
  await del(endpoints.request(id));
}

export async function getOwnMemes(userId) {
  return get(endpoints.ownMemes(userId));
}