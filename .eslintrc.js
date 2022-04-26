module.exports = {
  env: {
    browser: true,
    jest: true,
    "react-native/react-native": true,
  },
  extends: [
    "@react-native-community",
    "airbnb",
    "airbnb/hooks",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb-typescript",
  ],
  plugins: ["react", "react-native", "prettier", "jsx-a11y"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  root: true,
  rules: {
    "storybook/hierarchy-separator": "error",
    "storybook/default-exports": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/function-component-definition": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "never"],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {multiline: true},
        ObjectPattern: {multiline: true},
        ImportDeclaration: "never",
        ExportDeclaration: {multiline: true, minProperties: 3},
      },
    ],
  },
};
