import { page } from "./lib.js";
import { delIdea } from "./services/dataService.js";
import { logout, updateNav } from "./services/userService.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetails } from "./views/detailsView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { showHomeView } from "./views/showHome.js";

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", onLogout);
page("/dashboard", showDashboardView);
page("/ideas/:id", showDetails);
page("/delete/:id", onDelete);
page("/create", showCreateView);
page.start();
updateNav();

async function onLogout() {
  await logout();
  updateNav();
  page.redirect("/");
}

async function onDelete(ctx) {
  const id = ctx.params.id;
  await delIdea(id);
  page.redirect("/dashboard");
}
