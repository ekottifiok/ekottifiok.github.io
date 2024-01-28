const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}



// module.exports = {
//   root: true,
//   extends: [
//     "next",
//     "next/core-web-vitals",
//     "plugin:jest-dom/recommended",
//     // "plugin:testing-library/react",
//     "prettier",
//     require.resolve('@vercel/style-guide/eslint/node'),
//     require.resolve('@vercel/style-guide/eslint/react'),
//     require.resolve('@vercel/style-guide/eslint/typescript'),
//   ],
//   parserOptions: {
//     project,
//   },
//   plugins: [
//     "react-hooks"
//   ],
//   rules: {
//     "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
//     "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
//     "import/no-named-as-default": "warn",  // warn about default cause Next.js need's this
//     "@next/next/no-img-element": "off",         // don't warn about using the img tag
//     "unicorn/filename-case": "warn",
//   },
//   settings: {
//     'import/resolver': {
//       typescript: {
//         project,
//       },
//     },
//   },
// }