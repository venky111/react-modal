module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  rules: {},
  settings: {
    react: {
      version: 'latest', // "detect" automatically picks the version you have installed.
    },
  },
};
