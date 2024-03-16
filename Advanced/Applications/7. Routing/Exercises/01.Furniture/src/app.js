import { logout, updateNav } from "./service/userService.js";
import { page } from "./utility/lid.js";
import { showCreateView } from "./views/createView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showDetails } from "./views/detailsView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";

page("/", showDashboard);
page("/dashboard", showDashboard);
page("/details/:id", showDetails);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", () => {
  logout();
  updateNav();
  page.redirect("/");
});
page("/create", showCreateView)

page("/myFurniture", () => console.log("furn"));

updateNav();

page.start();
