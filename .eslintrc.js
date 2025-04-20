/* ••[1]••••••••••••••••••••••••• .eslintrc.js •••••••••••••••••••••••••••••• */

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			classes: true,
			defaultParams: true,
			sourceType: 'module',
			impliedStrict: true,
		},
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'prettier'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		// https://eslint.org/docs/rules/
		// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
		// '@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: false,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: false,
				allowConciseArrowFunctionExpressionsStartingWithVoid: false,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/init-declarations': ['error'],
		// '@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-readonly': [
			'error',
			{ onlyInlineLambdas: true },
		],
		'@typescript-eslint/typedef': [
			'error',
			{
				arrayDestructuring: true,
				arrowParameter: true,
				memberVariableDeclaration: true,
				objectDestructuring: true,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
		'accessor-pairs': 'off',
		'dot-notation': 'off',
		'import/no-duplicates': 'off',
		'import/order': [
			'warn',
			{
				alphabetize: { order: 'ignore' },
				groups: [],
				'newlines-between': 'never',
			},
		],
		'init-declarations': 'off',
		'no-multiple-empty-lines': ['warn', { max: 1 }],
		'no-restricted-imports': 'off',
		'no-undef-init': 'off',
		'no-useless-constructor': 'off',
		'object-shorthand': ['error', 'always'],
		'padded-blocks': ['error', 'never'],
		'require-jsdoc': 'off',
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			},
		],
		'sort-keys': [
			'error',
			'asc',
			{ caseSensitive: false, natural: true, minKeys: 2 },
		],
		camelcase: 'off',
		strict: ['error', 'global'],
	},
};
