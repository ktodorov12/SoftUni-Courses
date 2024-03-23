import { get, post } from "./requester.js";

const endpoints = {
  like: "/data/useful",
  totalLikes: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
  likesPerUser: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function sendLike(characterId) {
  await post(endpoints.like, { characterId:  characterId });
}

export async function getLikesForChar(characterId) {
  return await get(endpoints.totalLikes(characterId));
}

export async function hasUserLiked(characterId, userId) {
  return await get(endpoints.likesPerUser(characterId, userId));
}
