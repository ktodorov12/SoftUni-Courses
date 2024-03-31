import { logout, updateNav } from "./data/users.js";
import { page } from "./lib.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showMyTeamView } from "./views/myTeamsView.js";

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/dashboard", showDashboardView);
page("/details/:id", showDetailsView);
page("/create", showCreateView);
page("/edit/:id", showEditView);
page("/myTeams", showMyTeamView);


page.start();
page.redirect("/");
updateNav();

document.getElementById("logoutBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  await logout();
  page.redirect("/");
});
