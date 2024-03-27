import { getGamesHomePage } from "../data/games.js";
import { html, render } from "../lib.js";

const homeTemplate = (neededGames) => html`
  <section id="welcome-world">
    <div class="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />

    <div id="home-page">
      <h1>Latest Games</h1>
      <section id="welcome-world">
      ${neededGames.length > 0 
        ? neededGames.map(cardTemplate) 
        : html`<p class="no-articles">No games yet</p>`}
    </div>
        </section>

    </div>
  </section>
`;

function cardTemplate(game) {
  return html`
  <div class="game">
    <div class="image-wrap">
      <img src=${game.imageUrl} />
    </div>
    <h3>${game.title}</h3>
    <div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
    <div class="data-buttons">
      <a href="/details/${game._id}" class="btn details-btn">Details</a>
    </div>
  </div>`;
}

export async function showHomeView() {
  const homeGames =  await getGamesHomePage();
  const firstThree = homeGames.slice(0, 3);
  render(homeTemplate(firstThree));
}
