import { editTeam, getDetailsTeam } from "../data/teams.js";
import { renderError } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(hasError, team) {
  return html` 
  <section id="edit">
    <article class="narrow">
      <header class="pad-med">
        <h1>Edit Team</h1>
      </header>
      <form @submit=${createSubmitHandler(team.onEdit)} id="edit-form" class="main-form pad-large">
        ${hasError
          ? html`<div class="error">${hasError.message}</div>`
          : null}
        <label>Team name: <input type="text" name="name" .value=${team.name} /></label>
        <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl} /></label>
        <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
        <input class="action cta" type="submit" value="Save Changes" />
      </form>
    </article>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const teamDetails = await getDetailsTeam(id);
  teamDetails.onEdit = onEdit
  render(editTemplate(null, teamDetails));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return renderError(editTemplate, "All fields requiered", teamDetails);
    }

    if (data.name.length < 4) {
      return renderError(editTemplate, "Name is too short", teamDetails);
    }
  
    if (data.description.length < 10) {
      return renderError(editTemplate, "Description is too short", teamDetails);
    }
  
    try {
      await editTeam(id, data);
      page.redirect(`/details/${id}`);
    } catch (error) {
      renderError(editTemplate, error.message, teamDetails);
    }
  }
}
