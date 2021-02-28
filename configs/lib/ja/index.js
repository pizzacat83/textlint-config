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
    "preset-ja-spacing": {
      "ja-space-between-half-and-full-width": {
        "space": "always",
      },
      "ja-space-around-code": true,
      "ja-no-space-around-parentheses": true,
      "ja-space-after-exclamation": false,
      "ja-space-after-question": false,
    }
  },
}