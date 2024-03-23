import { get, post } from "./requester.js";

const endpoints = {
  like: "/data/likes",
  totalLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
  userLiked: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function postLike(factId) {
  await post(endpoints.like, { factId });
}

export async function getLikes(factId) {
  return await get(endpoints.totalLikes(factId));
}

export async function hasUserLiked(factId, userId) {
  return await get(endpoints.userLiked(factId, userId));
}
