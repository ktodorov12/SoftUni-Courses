import { get, post } from "./requester.js";

const endpoints = {
  post: "/data/comments",
  allGames: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
};

export async function postComment(gameId, comment) {
  await post(endpoints.post, { gameId, comment });
}

export async function getAllComments(gameId) {
  return await get(endpoints.allGames(gameId));
}
