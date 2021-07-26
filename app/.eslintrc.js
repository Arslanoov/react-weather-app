module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 'off'
  },
  ignorePatterns: [
    '.eslintrc.js'
  ],
};
