const { moduleInterop } = require("@textlint/module-interop");

const presetMyCommon = moduleInterop(require("@pizzacat83/textlint-rule-preset-common"));

const presetJaTechnical = moduleInterop(require("textlint-rule-preset-ja-technical-writing"));
const presetJTF = moduleInterop(require("textlint-rule-preset-jtf-style"));
const presetJaEngineeringPaper = moduleInterop(require("textlint-rule-preset-ja-engineering-paper"));

module.exports = {
  rules: {
      ...presetMyCommon.rules,
      ...presetJTF.rules,
      ...presetJaTechnical.rules,
      ...presetJaEngineeringPaper.rules,
  },
  rulesConfig: {
      ...presetMyCommon.rulesConfig,
      ...presetJTF.rulesConfig,
      ...presetJaTechnical.rulesConfig,
      ...presetJaEngineeringPaper.rulesConfig,
  }
};
