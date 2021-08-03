module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': ['error', { 'code': 120, 'tabWidth': 2 }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],

    'react/prop-types': 'off',
    'import/no-cycle': 'off',
  },
  ignorePatterns: [
    '.eslintrc.js',
  ]
}
