const { moduleInterop } = require("@textlint/module-interop");

const commonConfig = moduleInterop(require("../common"))

module.exports = {
  "filters": {
    ...commonConfig.filters,
  },
  "rules": {
    ...commonConfig.rules,
    "textlint-rule-preset-jtf-style": true,
    "textlint-rule-preset-ja-technical-writing": true,
    "preset-ja-engineering-paper" : true,
  },
}