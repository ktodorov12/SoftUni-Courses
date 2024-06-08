const button = document.getElementById("delete-button");
if (button) {
  button.addEventListener("click", () => {
    const { pathname } = window.location;
    const movieId = pathname.split("/").at(2);
    const confirmed = confirm("Do you want to delete this movie?");

    if (confirmed) {
      window.location.pathname = `/delete/${movieId}`;
    }
  });
}
