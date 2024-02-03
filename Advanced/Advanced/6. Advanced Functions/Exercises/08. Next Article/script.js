function getArticleGenerator(articles) {
  let arts = Array.from(articles);
  const content = document.getElementById("content");

  function createEl() {
    if (arts[0] === undefined) {
      return;
    } else {
      let firstEl = arts.shift();
      let newArticle = document.createElement("article");
      newArticle.textContent = firstEl;
      content.appendChild(newArticle);
    }
  }
  return createEl;
}
