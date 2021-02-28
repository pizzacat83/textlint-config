const { moduleInterop } = require("@textlint/module-interop");

const presetJaTechnical = moduleInterop(require("textlint-rule-preset-ja-technical-writing"));

module.exports = {
  rules: {
      ...presetJaTechnical.rules,
  },
  rulesConfig: {
      ...presetJaTechnical.rulesConfig,
  }
};
