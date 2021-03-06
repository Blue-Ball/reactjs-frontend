module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
