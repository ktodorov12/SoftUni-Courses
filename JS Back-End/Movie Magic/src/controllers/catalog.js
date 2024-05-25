module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  about: (req, res) => {
    res.render("about");
  },
  search: (req, res) => {
    res.render("search");
  },
};
