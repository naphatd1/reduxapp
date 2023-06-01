// /* eslint-disable no-undef */
// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//   },
// }


module.export=
 {
    env: {
        browser: boolean,
        es2020: boolean,
    },
    extends: string,
    parser: string,
    parserOptions: {
        ecmaVersion: string,
        sourceType: string,
    },
    plugins: string,
    rules: {
        'react-refresh/only-export-components': string,
    },
}