import { showHomeView } from "./views/home.js";
import { init, showView } from "./nav.js";
import { showLoginView } from "./views/login.js";
import { showCreateView } from "./views/create.js";
import { showDetailsView } from "./views/details.js";
import { showRegister } from "./views/register.js";
import { logout } from "./data/users.js";

const views = {
  home: showHomeView,
  login: showLoginView,
  create: showCreateView,
  register: showRegister,
  logout: logout,
  details: showDetailsView,
};

init(views);
showView("home");
