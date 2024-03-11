import { html, render } from "../lit.js";
import { getTopics } from "../data/request.js";
import { showView } from "../nav.js";

const fragment = new DocumentFragment();
const topics = await getTopics();

const topicTemplate = (topic) => html` 
<div class="topic-container">
  <div @click=${onClick} class="topic-name-wrapper" id=${topic._id}>
    <div class="topic-name">
      <a href="#" class="normal">
        <h2>${topic.topicName}</h2>
      </a>
      <div class="columns">
        <div>
          <p>Date: <time>${new Date().getUTCDay()}</time></p>
          <div class="nick-name">
            <p>Username: <span>${topic.username}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export async function allTopics() {
  const mainDiv = document.querySelector(".new-topic-border");
  document.querySelectorAll(".topic-container").forEach(x => x.remove());

  render(Object.values(topics).map(topicTemplate), fragment);
  mainDiv.appendChild(fragment);
}

function onClick(e) {
  const id = e.currentTarget.id
  const found = Object.values(topics).find(topic => topic._id == id)
  if(found) {
  showView("topic-name-wrapper", found);
  }
}