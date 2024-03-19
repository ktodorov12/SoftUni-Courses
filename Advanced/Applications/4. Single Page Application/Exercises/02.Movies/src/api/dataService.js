import { del, get, post, put } from "./requester.js";

const BASE_URL = "http://localhost:3030";
const endpoints = {
  base: "/data/movies",
  request: (id) => `/data/movies/${id}`,
  numberOfLikes: (movieId) => `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
  likeForMovie: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
  likes: "/data/likes",
  revoke: (id) => `/data/likes/${id}`,
};

export async function getAllMovies() {
  return await get(BASE_URL + endpoints.base);
}

export async function createMovie(data) {
  return await post(BASE_URL + endpoints.base, data);
}

export async function detailsMovie(id) {
  return await get(BASE_URL + endpoints.request(id));
}

export async function editMovie(id, data) {
  return await put(BASE_URL + endpoints.request(id), data);
}

export async function deleteMovie(id) {
  return await del(BASE_URL + endpoints.request(id));
}

export async function getNumberOfLikes(movieId) {
  return await get(BASE_URL + endpoints.numberOfLikes(movieId));
}

export async function getLikesOfMovie(movieId, userId) {
  return await get(BASE_URL + endpoints.likeForMovie(movieId, userId));
}

export async function addALike(data) {
  return await post(BASE_URL + endpoints.likes, data);
}

export async function revokeALike(id) {
  return await del(BASE_URL + endpoints.revoke(id));
}

export function createSubmitHandler(callback) {
  return function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

    callback(Object.fromEntries(entries));
  };
}
