const { moduleInterop } = require("@textlint/module-interop");

const presetFilterComments = moduleInterop(require("textlint-filter-rule-comments"));

module.exports = {
  rules: {
    ...presetFilterComments.rules,
  },
  rulesConfig: {
    ...presetFilterComments.rulesConfig,
  }
};
