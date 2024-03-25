//TODO check all href links;
import { logout, updateNav } from "./data/users.js";
import { page } from "./lib.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showSearchView } from "./views/searchView.js";

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/dashboard", showDashboardView);
page("/details/:id", showDetailsView);
page("/create", showCreateView);
page("/edit/:id", showEditView);
page("/search", showSearchView);


page.start();
updateNav();

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logout();
  page.redirect("/");
});
