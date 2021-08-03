module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'max-empty-lines': 2,
    'unit-whitelist': ['em', 'rem', 'vh', 'vw', '%'],
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true
  }
}
