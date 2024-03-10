const root = document.querySelector(".container");

let views = {};
export function init(inViews) {
  views = inViews;
}

export async function showView(linkId, param) {
  const view = views[linkId];

  if (typeof view == "function") {
    await view(param);
  }
}
