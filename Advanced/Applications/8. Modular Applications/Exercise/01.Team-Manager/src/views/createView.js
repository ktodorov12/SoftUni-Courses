import { approveMember, requestToBeMember } from "../data/teamRequester.js";
import { createTeam } from "../data/teams.js";
import { renderError } from "../data/users.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm(hasError) {
  return html`
    <section id="create">
      <article class="narrow">
        <header class="pad-med">
          <h1>New Team</h1>
        </header>
        <form @submit=${createSubmitHandler(onCreate)} id="create-form" class="main-form pad-large">
          ${hasError
            ? html`<div class="error">${hasError.message}</div>`
            : null}
          <label>Team name: <input type="text" name="name" /></label>
          <label>Logo URL: <input type="text" name="logoUrl" /></label>
          <label>Description: <textarea name="description"></textarea></label>
          <input class="action cta" type="submit" value="Create Team" />
        </form>
      </article>
    </section>
  `;
}

export function showCreateView() {
  render(templateForCreateForm(null));
}

async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return renderError(templateForCreateForm, "All fields requiered");
  }

  if (data.name.length < 4) {
    return renderError(templateForCreateForm, "Name is too short");
  }

  if (data.description.length < 10) {
    return renderError(templateForCreateForm, "Description is too short");
  }

  try {
    const newTeam = await createTeam(data);
    const memberRequest = await requestToBeMember(newTeam._id);
    await approveMember(memberRequest._id, memberRequest);

  } catch (error) {
    renderError(templateForCreateForm, error.message);
  }
}
