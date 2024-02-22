module.exports = {
  root: true,
  env: { browser: true, es2020: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
		'plugin:prettier/recommended'
  ],
  overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-var': 'error',
		'prefer-const': 'warn',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'warn',
			{
				endOfline: 'lf'
			}
		]
  },
  parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
}

