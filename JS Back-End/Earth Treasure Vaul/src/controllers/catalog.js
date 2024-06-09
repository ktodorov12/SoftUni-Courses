module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  dashboard: (req, res) => {
    res.render("dashboard");
  },
  search: (req, res) => {
    res.render("search");
  },
};
