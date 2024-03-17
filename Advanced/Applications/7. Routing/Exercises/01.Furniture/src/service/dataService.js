import { del, get, post, put } from "../utility/requester.js";

const BASE_URL = "http://localhost:3030/data/";
const endpoints = {
  catalog: BASE_URL + "catalog",
  requests: (id) => BASE_URL + `catalog/${id}`,
  myFurn: (userId) => BASE_URL + `catalog?where=_ownerId%3D%22${userId}%22`,
};

export async function createFurniture(data) {
    return await post(endpoints.catalog, data);
}

export async function getAllFurniture() {
    return await get(endpoints.catalog);
}

export async function furnitureDetails(furnitureId) {
    return await get(endpoints.requests(furnitureId));
}

export async function updateFurniture(furnitureId, data) {
    return await put(endpoints.requests(furnitureId), data);
}

export async function deleteFurniture(furnitureId) {
    return await del(endpoints.requests(furnitureId));
}

export async function myFurniture(userId) {
    return await get(endpoints.myFurn(userId))
}
