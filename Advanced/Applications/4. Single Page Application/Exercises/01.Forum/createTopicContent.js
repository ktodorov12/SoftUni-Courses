import { createEls } from "./createEls.js";

export function createTopicContent(topic) {
  const { topicName, username, postText } = topic;
  const date = new Date();

  const div = createEls(
    topicName,
    "header",
    `<img src="./static/profile.png" alt="avatar">
        <p><span>${username}</span> posted on <time>${date.getUTCDate()}time></p>

        <p class="post-content">${postText}</p>
    </div>`
  );

  return div;
}
