import { createEls } from "./createEls.js";

export function createTopicComments(comment) {
    const { topicName, username, postText } = comment;
    const date = new Date();
    
    const div = createEls(
      topicName,
      "topic-name-wrapper",
      `<div class="topic-name">
          <p><strong>${username}</strong> commented on <time>${date}</time></p>
          <div class="post-content">
              <p>${postText}</p>
          </div>
      </div>`
    );
    return div;
}
