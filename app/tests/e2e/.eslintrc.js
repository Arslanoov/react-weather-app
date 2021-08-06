module.exports = {
  plugins: ["cypress"],
  env: {
    "cypress/globals": true
  },
  rules: {
    strict: "off"
  },
  ignorePatterns: [
    '.eslintrc.js',
  ]
};
