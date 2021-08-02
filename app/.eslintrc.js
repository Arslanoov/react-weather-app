module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
  },
  ignorePatterns: [
    '.eslintrc.js',
  ]
}
