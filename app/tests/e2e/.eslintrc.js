module.exports = {
  plugins: ["cypress"],
  parserOptions: {
    project: '../../../../tsconfig.json',
  },
  env: {
    "cypress/globals": true
  },
  rules: {
    strict: "off"
  }
};
