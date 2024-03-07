import { createEls } from "./createEls.js";

export function createFragmentTopic(topic) {
  const { topicName, username } = topic;
  const date = new Date();

  const div = createEls(
    topic._id,
    "topic-name-wraper",
    `
  <div class="topic-name">
      <a href="#" class="normal">
          <h2>${topicName}</h2>
      </a>
      <div class="columns">
          <div>
              <p>Date: <time>${date.toUTCString()}</time></p>
              <div class="nick-name">
                  <p>Username: <span>${username}</span></p>
              </div>
          </div>
      </div>
  </div>`
  );

  return div;
}
