import { get, post } from "./requester.js";

const endpoints = {
  isBought: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  add: "/data/bought",
  allBought: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
};

export async function addBuy(productId) {
  return await post(endpoints.add, { productId });
}

export async function allBought(productId) {
  return await get(endpoints.allBought(productId));
}

export async function isUserBought(productId, userId) {
  return await get(endpoints.isBought(productId, userId));
}
