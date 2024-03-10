import { init, showView } from "./nav.js";
import { showHomeView } from "./views/home.js";
import { showTopic } from "./views/topic.js";

const views = {
  "new-topic-border": showHomeView,
  "topic-name-wrapper": showTopic
};

init(views);
showView("new-topic-border");
