const { moduleInterop } = require("@textlint/module-interop");

const jaConfig = moduleInterop(require("./lib/ja"))

module.exports = jaConfig;
