module.exports = {
    parser: "@babel/eslint-parser",
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ["airbnb-base", "prettier"],
    rules: {
      "no-console": "off",
      "import/prefer-default-export": "off",
      "prefer-template": "off",
    },
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 2020,
      sourceType: "module",
    },
  };