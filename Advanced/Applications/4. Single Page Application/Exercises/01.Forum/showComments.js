import { createTopicComments } from "./createTopicComments.js";
import { request } from "./request.js";

export async function showComments() {
  const comments = document.getElementById("user-comment");
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";

  const resp = await request("get", url);

  comments.innerHTML = "";
  Object.values(resp).forEach((comm) => {
    const div = createTopicComments(comm);
    comments.appendChild(div);
  });
}
