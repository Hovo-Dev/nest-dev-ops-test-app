module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:date/recommended',
    ],
    overrides: [
        {
            files: ['**/src/**'],
            rules: {
                'max-lines': ['error', 600],
                'max-lines-per-function': [
                    'error',
                    {
                        max: 100,
                        skipBlankLines: true,
                        skipComments: true,
                        IIFEs: true,
                    },
                ],
            },
        },
    ],
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {argsIgnorePattern: '^_', ignoreRestSiblings: true},
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['enum', 'enumMember'],
                format: ['PascalCase'],
            },
        ],
        'date/no-new-date-without-args': 'error',
        'date/no-new-date-with-args': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'max-lines': ['error', 700],
        'max-params': ['error', {max: 3}],
        'max-lines-per-function': [
            'error',
            {
                max: 75,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],
        'no-console': 'error',
        curly: 'error',
    },
}
