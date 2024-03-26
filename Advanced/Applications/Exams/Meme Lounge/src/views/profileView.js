import { getOwnMemes } from "../data/memes.js";
import { html, render } from "../lib.js";
import { getUserData, getUserId } from "../util.js";

const profileTemplate = (user, memes) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src=${user.gender == "male" ? "/images/male.png" : "/images/female.png"} />
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length > 0
            ? memes.map(memeTemplate)
            : html`<p class="no-memes">No memes in database.</p>`}
    </div>
  </section>
`;

const memeTemplate = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}" />
    <a class="button" href="/details/${meme._id}">Details</a>
  </div>
`;

export async function showProfileView() {
  const userData = getUserData();
  const ownMemes = await getOwnMemes(getUserId());

  render(profileTemplate(userData, ownMemes));
}
