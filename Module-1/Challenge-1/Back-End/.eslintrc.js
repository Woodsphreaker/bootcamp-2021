module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'object-curly-spacing': [2, 'always'],
    semi: [2, 'never'],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
}
