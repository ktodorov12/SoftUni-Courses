let views = {};
export function init(inView) {
    views = inView
}

export function showView(view) {
    views[view]();
}   