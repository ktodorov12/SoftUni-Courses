window.addEventListener("load", start);

let currentRecipeArticle = null;
let currentRecipeData = [];

async function start() {
  const main = document.querySelector("main");

  const recipes = await getRecipes();
  main.replaceChildren(...Object.values(recipes).map(createRecipes));
}

async function getRecipes() {
  const recipesUrl = "http://localhost:3030/jsonstore/cookbook/recipes";
  try {
    const response = await fetch(recipesUrl);
    if (!response.ok) {
      const message = await response.json();
      throw message;
    }

    const recipes = await response.json();
    return recipes;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

async function recipeInformation(id) {
  const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = await response.json();
      throw message;
    }

    const recipes = await response.json();
    return recipes;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

function createRecipes(entry) {
  const article = document.createElement("article");
  article.classList.add("preview");

  article.innerHTML = `
  <div class="title">
      <h2>${entry.name}</h2>
  </div>
  <div class="small">
      <img src=${entry.img}>
  </div>`;

  article.addEventListener("click", () => showText(entry._id, article));
  return article;
}

async function showText(id, art) {
  const response = await recipeInformation(id);

  if (currentRecipeArticle) {
    currentRecipeArticle.innerHTML = `
      <div class="title">
        <h2>${currentRecipeData.name}</h2>
      </div>
      <div class="small">
        <img src=${currentRecipeData.img}>
      </div>`;
  }

  art.innerHTML = `
  <article>
      <h2>${response.name}</h2>
      <div class="band">
          <div class="thumb">
              <img src=${response.img}>
          </div>
          <div class="ingredients">
              <h3>Ingredients:</h3>
              <ul>
                    ${response.ingredients
                      .map((ing) => `<li>${ing}</li>`)
                      .join("")}
              </ul>
          </div>
      </div>
      <div class="description">
          <h3>Preparation:</h3>
          ${response.steps.map((step) => `<p>${step}</p>`).join("")}
      </div>
  </article>`;

  currentRecipeArticle = art;
  currentRecipeData = {
    name: response.name,
    img: response.img,
    id: response._id,
  };
}
