module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "unobtrusive",
    "unobtrusive/react",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  globals: {
    window: "readonly",
    document: "readonly",
  },
  plugins: ["react-refresh", "react", "react-hooks", "prettier", "jest", "import"],
  settings: {
    // eslint-plugin-react configuration. Detect React version
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["./src/"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
      alias: {
        map: [
          ["@", "./src"],
          ["#", "./test"],
          ["config", "./config"],
          ["resources", "./resources"],
          ["root", "."],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
      typescript: true,
    },
  },
  rules: {
    // Fail if the file does not follow the Prettier formatting rules.
    // Uses the framework's prettier config.
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": ["error"],
    // console.log sentences issue warnings
    // https://eslint.org/docs/rules/no-console
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // debugger sentences issue errors
    // https://eslint.org/docs/rules/no-debugger
    "no-debugger": "error",
    // Require sentences outside of the global scope issue warnings
    // https://eslint.org/docs/rules/global-require
    "global-require": "warn",
    // Allow usage of Common JS require and module.exports. They are used throughout
    // the tooling config files
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",
    // Allow importing transitive dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // If enabled, disable directives must be added inline or new entries must be added to the import/core-modules
    // setting. Notice that import/core-modules has an awkward behaviour (see
    // https://github.com/benmosher/eslint-plugin-import/issues/1281)
    "import/no-extraneous-dependencies": "off",
    // Allow unused variables in some instances or when the variable name is prefixed by an underscore
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": [
      "warn",
      { args: "none", varsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    // Imports must point to existent files/modules
    // Webpack aliases are ignored by this rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": ["error", { ignore: ["@/", "root/", "config/", "forms/", "resources/"] }],
    "no-else-return": ["error", { allowElseIf: false }],
    "react/prop-types": ["warn", { skipUndeclared: true }],
    "react/destructuring-assignment": "error",
    "react/jsx-props-no-spreading": "error",
    "react/function-component-definition": [
      2,
      { namedComponents: "function-declaration" },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Issue errors if the "rules of hooks" are not met
    // https://reactjs.org/docs/hooks-rules.html
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": [2, "never"],
    "react/jsx-newline": ["warn", { prevent: true, allowMultilines: true }],
    "react/hook-use-state": ["error", { allowDestructuredState: true }],
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      },
    ],
    "no-duplicate-imports": "error",
    // Checks that data-testid are Pascal-Case with some exceptions like GraphQL
    "testing-library/consistent-data-testid": [
      "error",
      {
        testIdPattern: "^[A-Z][a-z]+(?:-?[A-Z]+[a-z]*)*$",
        customMessage:
          "data-testid must be in the format of Pascal-Case. You can also have multiple uppercase letters for words like GraphQL or OAuth.",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", ".tsx"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["*-test.js", "*-test.jsx", "*.test.ts", "*.test.tsx"],
      rules: {
        "jest/no-disabled-tests": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-to-be": "warn",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": "error",
        "sonarjs/no-duplicate-string": "off",
        "react/jsx-props-no-spreading": "off",
      },
      env: {
        jest: true,
      },
    },
  ],
};
