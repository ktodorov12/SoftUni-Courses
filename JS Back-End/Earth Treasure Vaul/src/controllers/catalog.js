const { getStonesHome, getStonesDashboard, searchForStone } = require("../services/stones");

module.exports = {
  home: async (req, res) => {
    const stones = await getStonesHome();

    res.render("home", { stones });
  },
  dashboard: async (req, res) => {
    const stones = await getStonesDashboard();

    res.render("dashboard", { stones });
  },
  search: async (req, res) => {
    const stones = await searchForStone(req.query);

    res.render("search", { stones });
  },
};
