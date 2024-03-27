import { get, post } from "./requester.js";

const endpoints = {
  post: "/data/likes",
  total: (id) => ``,
  isUser: (id, userId) => ``,
};

//TODO check name and data
export async function post(POST) {
  await post(endpoints.post, { POST });
}

export async function total(id) {
  return await get(endpoints.total(id));
}

export async function hasUserLiked(id, userId) {
  return await get(endpoints.isUser(id, userId));
}
