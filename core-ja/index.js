const { moduleInterop } = require("@textlint/module-interop");

const presetJaTechnical = moduleInterop(require("textlint-rule-preset-ja-technical-writing"));
const presetJTF = moduleInterop(require("textlint-rule-preset-jtf-style"));
const presetJaEngineeringPaper = moduleInterop(require("textlint-rule-preset-ja-engineering-paper"));

module.exports = {
  rules: {
      ...presetJTF.rules,
      ...presetJaTechnical.rules,
      ...presetJaEngineeringPaper.rules,
  },
  rulesConfig: {
      ...presetJTF.rulesConfig,
      ...presetJaTechnical.rulesConfig,
      ...presetJaEngineeringPaper.rulesConfig,
  }
};
