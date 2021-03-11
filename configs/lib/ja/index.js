const { moduleInterop } = require("@textlint/module-interop");

const commonConfig = moduleInterop(require("../common"))

module.exports = {
  "filters": {
    ...commonConfig.filters,
  },
  "rules": {
    ...commonConfig.rules,
    "textlint-rule-preset-jtf-style": {
      "1.2.2.ピリオド(.)とカンマ(,)": false,
      "3.1.1.全角文字と半角文字の間": false,
    },
    "textlint-rule-preset-ja-technical-writing": {
      "ja-no-mixed-period": false, // covered in preset-ja-engineering-paper
    },
    "preset-ja-engineering-paper" : true,
    "preset-ja-spacing": {
      "ja-space-between-half-and-full-width": {
        "space": "always",
      },
      "ja-space-around-code": true,
      "ja-no-space-around-parentheses": true,
      "ja-space-after-exclamation": false,
      "ja-space-after-question": false,
    },
    "no-mixed-zenkaku-and-hankaku-alphabet": {
      "prefer": "半角"
    },
  },
}