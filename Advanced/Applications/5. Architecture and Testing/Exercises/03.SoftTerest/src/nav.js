const pathNames = {
  "/home": true,
  "/dashboard": true,
  "/create": true,
  "/logout": true,
  "/login": true,
  "/register": true,
};

export function showView(view) {
  if (typeof view == "function") {
    pathNames[view]();
  }
}
