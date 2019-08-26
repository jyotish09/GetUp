module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
		'jsx-a11y',
		'import',
		'compat'
  ],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
		'indent': ['error', 4, { 'SwitchCase': 1 }],
		'semi': ['error', 'always'], //Always use semicolons at the end of the statement
		'jsx-quotes': ['error', 'prefer-double'],
		'one-var': 'off',
		'react/jsx-indent': ['error', 4],
		'react/jsx-indent-props': ['error', 4],
		'max-len': [2, 150, 2, {'ignoreComments': true}], //Max 150 characters allowed in a line,
		'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': true }],
		'compat/compat': 'error',
    'no-undef': 'error',
    'react/prefer-stateless-function': 0,
    'func-names': 0,
    'import/no-unresolved': 0,
    'max-classes-per-file': [1, 5]
  },
  parser: 'babel-eslint',
};