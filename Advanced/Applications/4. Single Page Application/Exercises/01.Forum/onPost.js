import { createTopicComments } from "./createTopicComments.js";
import { request } from "./request.js";
import { showComments } from "./showComments.js";

export async function onPost(e) {
  e.preventDefault();

  const form = e.target.parentElement;
  const formData = new FormData(form);
  const { postText, username } = Object.fromEntries(formData.entries());

  if (!postText || !username) {
    return;
  }

  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
  const data = await request("post", url, { postText, username });

  showComments();
  form.reset();
}
