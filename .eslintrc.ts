module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['.eslintrc.js', 'tsconfig.ts'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
        project: './tsconfig.json',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['**/*.ts', '**/*.tsx'],
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
  },
};
