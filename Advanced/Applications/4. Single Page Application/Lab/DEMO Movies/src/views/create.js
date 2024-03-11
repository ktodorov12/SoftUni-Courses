import { post } from "../data/request.js";
import { showView } from "../nav.js";
import { createSubmitHandler, getUserData } from "../data/util.js";
import { html, render } from "../lit.js";

const createTemplate = () => html` 
<section id="create-view">
  <h1>Create Movie</h1>
  <form @submit=${createSubmitHandler(onPublish)} id="create-form">
    <label>
      Title:
      <input type="text" name="title" />
    </label>
    <label>
      Image URL:
      <input type="text" name="img" />
    </label>
    <label>
      Description:
      <input type="text" name="description" />
    </label>
    <input type="submit" value="Publish" />
  </form>
</section>`;

export function showCreateView() {
  render(createTemplate());
}

async function onPublish({ title, img, description }) {
  const url = "http://localhost:3030/data/movies";
  const userData = getUserData();

  if (!userData) {
    alert("You must be logged in to publish movies!");
    return;
  }

  const movie = await post(url, { title, img, description });
  showView("details", movie);
}
