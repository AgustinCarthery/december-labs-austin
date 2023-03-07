module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		'no-unused-vars': 'off',
		'no-undef': 'off',
	},
};