const { getStoneById } = require("../services/stones");
const { isOwnerOrLiked } = require("../util/helper");

module.exports = {
  details: async (req, res) => {
    const { stoneId } = req.params;
    const stone = await getStoneById(stoneId);
    isOwnerOrLiked(stone, req.user.userId);
    
    if (!stone) {
      res.render("404");
      return;
    }

    res.render("details", { stone });
  },
};
