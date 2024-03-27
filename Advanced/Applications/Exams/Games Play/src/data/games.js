import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/games?sortBy=_createdOn%20desc",
  add: "/data/games",
  request: (id) => `/data/games/${id}`,
  popularGames: "/data/games?sortBy=_createdOn%20desc"
};

export async function getAllGames() {
  return await get(endpoints.allData);
}

export async function addGame(data) {
  await post(endpoints.add, data);
}

export async function getGameDetails(id) {
  return await get(endpoints.request(id));
}

export async function editGame(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteGame(id) {
  await del(endpoints.request(id));
}

export async function getGamesHomePage() {
  return await get(endpoints.popularGames);
}
