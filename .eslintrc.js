module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended" // 添加 prettier 插件
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off"
  }
};
