import { logout, updateNav } from "./service/userService.js";
import { page } from "./lib.js";
import { showCreateView } from "./views/createView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showDetails } from "./views/detailsView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { deleteFurniture } from "./service/dataService.js";
import { showEditView } from "./views/editView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";

page("/", showDashboard);
page("/dashboard", showDashboard);
page("/details/:id", showDetails);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", onLogout);
page("/create", showCreateView);
page("/delete/:id", onDelete)
page("/edit/:id", showEditView);
page("/myFurniture", myFurnitureView);

updateNav();
page.start();

async function onDelete(ctx) {
  const isConfirmed = confirm("Do you want to delete the item?");
  const id = ctx.params.id;

  if (isConfirmed) {
    await deleteFurniture(id);
    page.redirect("/");
  }
}

async function onLogout() {
  await logout();
  updateNav();
  page.redirect("/");
}