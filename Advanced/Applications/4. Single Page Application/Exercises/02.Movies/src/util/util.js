export const ednpoints = {
  get: "/data/movies",
  post: "/data/movies",
  put: (id) => `/data/movies/${id}`,
  del: (id) => `/data/movies/${id}`,
  like: (id) => `/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`,
  specificLike: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
  addLike: "/data/likes",
  revokeLike: (id) => `/data/likes/${id}`
};
