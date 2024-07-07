export function createSubmitHandler(callback) {
  return function (e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

    callback(Object.fromEntries(entries));
  };
}
