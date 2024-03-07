export function createEls(id, className, form) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.id = id;
  div.innerHTML = form;
  return div
}
