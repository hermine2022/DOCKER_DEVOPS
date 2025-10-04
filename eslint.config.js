// eslint.config.js
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "script",
      globals: {
        console: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
