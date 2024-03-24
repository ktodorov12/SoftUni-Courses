import { get, post } from "./requester.js";

const endpoints = {
  like: "/data/likes",
  totalLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
  isLikes: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function addLike(albumId) {
  await post(endpoints.like, { albumId });
}

export async function getLikes(albumId) {
  return await get(endpoints.totalLikes(albumId));
}

export async function isUserGoing(albumId, userId) {
  return await get(endpoints.isLikes(albumId, userId));
}
