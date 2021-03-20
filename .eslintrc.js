module.exports = {
  root: true,
  extends: ['airbnb-typescript-prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    camelcase: 0, // TODO: Enable later
    'react-hooks/exhaustive-deps': 1,
    'prettier/prettier': 0,
  },
};
