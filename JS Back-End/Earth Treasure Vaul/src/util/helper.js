function isOwnerOrLiked(stone, userId) {
  stone.isOwner = stone.ownerId.toString() == userId;

  const mapped = stone.likedList.map((l) => l.toString());
  stone.liked = mapped.includes(userId);
}

module.exports = {
  isOwnerOrLiked,
};
