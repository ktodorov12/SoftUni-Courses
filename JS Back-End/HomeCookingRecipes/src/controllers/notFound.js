module.exports = {
  notFound: (req, res) => {
    res.locals.title = "Page Not Found - Home Cooking Recipes"
    res.render("404");
  },
};
