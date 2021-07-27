module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: [
    '.eslintrc.js'
  ],
};
