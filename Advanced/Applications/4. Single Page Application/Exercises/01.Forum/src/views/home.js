import { post } from "../data/request.js";
import { html, render } from "../lit.js";
import { allTopics } from "./create.js";

const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

const homeViewTempalte = () => html`
  <div class="new-topic-border">
    <div class="header-background">
      <span>New Topic</span>
    </div>
    <form>
      <div class="new-topic-title">
        <label for="topicName">Title <span class="red">*</span></label>
        <input type="text" name="topicName" id="topicName" />
      </div>
      <div class="new-topic-title">
        <label for="username">Username <span class="red">*</span></label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="new-topic-content">
        <label for="postText">Post <span class="red">*</span></label>
        <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
      </div>
      <div class="new-topic-buttons">
        <button @click=${onCancel} class="cancel">Cancel</button>
        <button @click=${onPost} class="public">Post</button>
      </div>
    </form>
  </div>
`;

export function showHomeView() {
  render(homeViewTempalte());
  allTopics()
}

async function onPost(e) {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const { topicName, username, postText } = data;

  if (!topicName || !username || !postText) {
    return;
  }

  post(url, { topicName, username, postText });
  form.reset();
  allTopics();
}

function onCancel(e) {
  e.preventDefault();
  e.target.parentElement.parentElement.reset();
}
