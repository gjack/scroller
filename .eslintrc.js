module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'jest',
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-throw-literal': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
