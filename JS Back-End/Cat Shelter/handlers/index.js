const homeHandler = require("./home");
const staticFilesHandler = require("./static-handler");
const catHandler = require("./cat");
const editDeleteHandler = require("./delete-edit");

module.exports = [homeHandler, staticFilesHandler, catHandler, editDeleteHandler];
