module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    'max-lines': ['error', { max: 120, skipBlankLines: true }],

    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/semi': 'off',
  },
  ignorePatterns: [
    '.eslintrc.js'
  ],
};
