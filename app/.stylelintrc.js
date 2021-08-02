module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // "at-rule-no-unknown": null,
    // "scss/at-rule-no-unknown": true
    "max-empty-lines": 2,
    "unit-whitelist": ["em", "rem"]
  }
}
