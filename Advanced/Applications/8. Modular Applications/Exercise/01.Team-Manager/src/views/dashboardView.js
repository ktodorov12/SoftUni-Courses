import { getAllTeams, getListOfMembers } from "../data/teams.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

function dashboardTemplate(isLogged, allTeams) {
  return html`
    <section id="browse">
      <article class="pad-med">
        <h1>Team Browser</h1>
      </article>
        ${allTeams.map(cardTemplate)}
      <article class="layout narrow">
        ${isLogged
          ? html`<div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>`
          : null}
      </article>
    </section>
  `;
}

function cardTemplate(team) {
  return html`
  <article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col" />
    <div class="tm-preview">
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <span class="details">${team.members.length} Members</span>
      <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
  </article>`;
}

export async function showDashboardView() {
  debugger
  // const [allTeams, allMembers] = await Promise.all([
  //   getAllTeams(),
  //   getListOfMembers()
  // ]);
  const allTeams = await getAllTeams();
  const teamsWithMembers = allTeams.map(team => {
    const corresponding = allMembers.filter(member => member.teamId == team._id);
    team.members = corresponding;
    return team;
  });
  const isLogged = getUserData();
  render(dashboardTemplate(isLogged, teamsWithMembers));
}
