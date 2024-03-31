import { getListOfMembers, getMyTeams } from "../data/teams.js";
import { html, render } from "../lib.js";
import { getUserId } from "../util.js";

function myTeamTemplate(myTeams) {
  return html` <section id="my-teams">
    <article class="pad-med">
      <h1>My Teams</h1>
    </article>
    ${myTeamview(myTeams)}
  </section>`;
}

function myTeamview(teams) {
  return teams.length > 0
    ? html` 
        <article class="layout narrow">
          <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>

        ${teams.map(teamTemplate)}`
    : html`
        <article class="layout narrow">
          <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/dashboard">Browse all teams</a> to join one, or use the button bellow to create your own team.</p>
          </div>
          <div class=""><a href="/create" class="action cta">Create Team</a></div>
        </article>
      `;
}

function teamTemplate(team) {
  return html`
    <article class="layout">
      <img src=${team.logoUrl} class="team-logo left-col" />
      <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.members.length} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
      </div>
    </article>
  `;
}

export async function showMyTeamView() {
  const userData = getUserId();
  const [myTeams, allMembers] = await Promise.all([getMyTeams(userData), getListOfMembers()]);
  const teams = myTeams.map((t) => {
    const corresponding = allMembers.filter((member) => member.teamId == t.teamId);
    t.team.members = corresponding;
    return t.team;
  });
  render(myTeamTemplate(teams));
}
