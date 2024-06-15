const { Router } = require("express");

const { createStone, likeStone, getStoneById, editStone, deleteStoneId } = require("../services/stones");
const { isGuest, isOwner, isUser } = require("../middlewares/guards");

const stoneRouter = Router();

stoneRouter
  .route("/stones")
  .get(isGuest(), (req, res) => {
    res.render("create");
  })
  .post(isGuest(), async (req, res) => {
    const errors = {
      name: !req.body.name,
      category: !req.body.category,
      color: !req.body.color,
      imageUrl: !req.body.imageUrl,
      location: !req.body.location,
      formula: !req.body.formula,
      description: !req.body.description,
    };

    if (Object.values(errors).includes(true)) {
      return res.render("create", { stone: req.body, errors });
    }

    req.body.ownerId = req.user.userId;
    try {
      const stone = await createStone(req.body);
      res.redirect("/dashboard");
    } catch (error) {
      res.render("create", { stone: req.body, errors });
      console.log(error);
    }
  });

stoneRouter.get("/like/:stoneId", isGuest(), async (req, res) => {
  const { stoneId } = req.params;
  const { userId } = req.user;
  await likeStone(stoneId, userId);
  res.redirect("/");
});

stoneRouter
  .route("/edit/:stoneId")
  .get(isGuest(), isOwner(), async (req, res) => {
    const { stoneId } = req.params;
    const stone = await getStoneById(stoneId);

    res.render("edit", { stone });
  })
  .post(isGuest(), isOwner(), async (req, res) => {
    const { stoneId } = req.params;
    let data = req.body;
    data.ownerId = req.user.userId;

    try {
      await editStone(stoneId, data);
      res.redirect(`/details/${stoneId}`);
    } catch (error) {
      res.render("create");
    }
  });
stoneRouter.get("/delete/:stoneId", isGuest(), isOwner(), async (req, res) => {
  try {
    await deleteStoneId(req.params.stoneId);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});

module.exports = { stoneRouter };
