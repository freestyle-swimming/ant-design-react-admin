module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    "node": true,
    "es6": true,
    "browser": true,
    "jest": true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/promise-function-async': 'off',
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parser: "@typescript-eslint/parser"
};