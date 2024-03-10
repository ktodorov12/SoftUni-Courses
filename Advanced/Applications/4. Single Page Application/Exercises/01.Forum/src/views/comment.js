import { getComments } from "../data/request.js";
import { html, render } from "../lit.js";

const commentTemplate = (comment) => html`
  <div id="user-comment">
    <div class="topic-name-wrapper">
      <div class="topic-name">
        <p>
          <strong>${comment.username}</strong> commented on<time>${new Date().getDay}</time>
        </p>
        <div class="post-content">
          <p>
            ${comment.postText}
          </p>
        </div>
      </div>
    </div>
  </div>
  `;

export async function allComments() {
  const fragment = document.createDocumentFragment();
  const comments = await getComments();
  const div = document.getElementById("div");
  div.replaceChildren();
  render(Object.values(comments).map(commentTemplate), fragment);
  div.appendChild(fragment)
}   