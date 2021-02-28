const { moduleInterop } = require("@textlint/module-interop");

const commonConfig = moduleInterop(require("./lib/common"));

module.exports = commonConfig;
