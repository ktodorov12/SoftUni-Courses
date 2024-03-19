import { addALike, deleteMovie, getLikesOfMovie, getNumberOfLikes } from "./api/dataService.js";
import { logout, updateNav } from "./api/userService.js";
import { page } from "./util/lib.js";
import { showCreateView } from "./views/createView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";

page("/home", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", onLogout);
page("/create", showCreateView);
page("/details/:id", showDetailsView);
page("/edit/:id", showEditView);
page("/delete/:id", onDelete);
page("/like/:id", onLike);

updateNav();
page.start();

async function onLogout() {
  await logout();
  page.redirect("/home");
}

async function onDelete(ctx) {
  const movieId = ctx.params.id;
  await deleteMovie(movieId);
  page.redirect("/home");
}

async function onLike(ctx) {
  const movieId = ctx.params.id;
  await addALike({ movieId: movieId });
  const span = document.querySelector(".enrolled-span");
  const likes = await getNumberOfLikes(movieId);
  span.textContent = `Liked ${likes}`;
}
