module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "react-app",
    "plugin:react-hooks/recommended",
  ],

  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-hooks"],
  rules: {
    strict: 0,
    "arrow-body-style": "off",
    "no-plusplus": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-param-reassign": ["error", { props: false }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
};
