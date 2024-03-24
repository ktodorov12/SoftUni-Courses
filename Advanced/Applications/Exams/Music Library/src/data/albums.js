import { del, get, post, put } from "./requester.js";

const endpoints = {
  allAlbums: "/data/albums?sortBy=_createdOn%20desc",
  addAlbum: "/data/albums",
  request: (id) => `/data/albums/${id}`,
};

export async function getAllAlbums() {
  return await get(endpoints.allAlbums);
}

export async function addAlbum(data) {
  await post(endpoints.addAlbum, data);
}

export async function getAlbumDetails(id) {
  return await get(endpoints.request(id));
}

export async function editAlbum(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteAlbum(id) {
  await del(endpoints.request(id));
}
