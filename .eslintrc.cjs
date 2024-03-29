module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'import/order': ['error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: './**', group: 'internal', position: 'after' },
          { pattern: '../**', group: 'internal', position: 'after' },
          { pattern: '@/**', group: 'internal', position: 'after' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'react-hooks/exhaustive-deps': 'off',
    'import/extensions': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'comma-dangle': ['error', 'never'],
    'max-lines': ['error', 100],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-sort-props': [2,
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'react/jsx-curly-spacing': ['error', { when: 'always', attributes: false, children: true }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off'
  }
};
