import { post } from "../data/request.js";
import { html, render } from "../lit.js";
import { allComments } from "./comment.js";

const singleTopicTemplate = (topic) => html`
<div class="topic-title" id=${topic._id}>
  <div class="comment">
    <div class="header">
      <img src="./static/profile.png" alt="avatar" />
      <p>
        <span>${topic.topicName}</span> posted on<time>${new Date().getUTCDay()}</time>
      </p>

      <p class="post-content">${topic.postText}</p>
    </div>
  </div>

  <div id="div"></div>

  <div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
      <form>
        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
        <div>
          <label for="username">Username <span class="red">*</span></label>
          <input type="text" name="username" id="username" />
        </div>
        <button @click=${onCLick}>Post</button>
      </form>
    </div>
  </div>
</div>
`;

export function showTopic(topic) {
  render(singleTopicTemplate(topic));
}

function onCLick(e) {
    e.preventDefault();
    const form = e.target.parentElement
    const data = new FormData(form);
    const {username, postText} = Object.fromEntries(data.entries());

    if(!username || !postText) {
        return;
    }
    post("http://localhost:3030/jsonstore/collections/myboard/comments", {username, postText})
    allComments({username, postText})
    form.reset();
}