import { createTopicContent } from "./createTopicContent.js";
import { createFragmentTopic } from "./createTopicFragment.js";
import { onPost } from "./onPost.js";
import { request } from "./request.js";
import { showComments } from "./showComments.js";

const form = document.querySelector("form");
const postBtn = document.querySelector("form .public");
const cancelBtn = document.querySelector("form .cancel");
const topicContainer = document.querySelector(".topic-container");
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

const commentsField = document.querySelector(".comment");
const fieldComment = document.querySelector(".answer-comment");
const comments = document.getElementById("user-comment");

comments.style.display = "none";
fieldComment.style.display = "none";
commentsField.style.display = "none";

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  return;
});
postBtn.addEventListener("click", onSubmit);
async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const trimed = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

  if (trimed.some((x) => x[1] == "")) {
    return;
  }

  const data = Object.fromEntries(trimed);
  const { topicName, username, postText } = data;
  await request("post", url, { topicName, username, postText });
  showTopics();
}

async function showTopics() {
  const respData = await request("get", url);
  topicContainer.innerHTML = "";

  Object.values(respData).forEach((topic) => {
    const div = createFragmentTopic(topic, url);
    div.addEventListener("click", onclick);
    topicContainer.appendChild(div);
  });

  form.reset();
}

async function onclick(e) {
  e.preventDefault();
  showComments();

  const id = e.currentTarget.id;
  const respData = await request("get", url);
  const found = Object.values(respData).find((x) => x._id == id);

  document.querySelector(".new-topic-border").style.display = "none";
  document.querySelector(".topic-container").style.display = "none";
  comments.style.display = "block";
  fieldComment.style.display = "block";
  commentsField.style.display = "block";

  const topicContent = createTopicContent(found);
  const postCommentBtn = document.querySelector(".answer button");
  postCommentBtn.addEventListener("click", onPost);

  commentsField.appendChild(topicContent);
}
