import { get, post } from "./requester.js";

const endpoints = {
  like: "/data/going",
  totalGoing: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
  isGoing: (eventId, userId) => `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function postLike(eventId) {
  await post(endpoints.like, { eventId });
}

export async function getAllGoings(eventId) {
  return await get(endpoints.totalGoing(eventId));
}

export async function isUserGoing(eventId, userId) {
  return await get(endpoints.isGoing(eventId, userId));
}
