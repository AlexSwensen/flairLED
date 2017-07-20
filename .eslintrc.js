module.exports = {
    extends: ['eslint:recommended'],
    plugins: ['jasmine'],
    env: {
        browser: true,
        commonjs: true,
        jasmine: true,
        es6: true,
        jquery: true,
        node: true,
        protractor: true
    },
    globals: {
        "_": false,
        "$": false,
        "angular": false,
        "ga": false,
        "google": false,
        "moment": false,
        "Uint8Array": false,
        "videojs": false,
        "zE": false,
        "browser": false,
        "inject": false,
        "analytics": false
    },
    rules: {
        /* 0: off
         * 1: warn
         * 2: error */

        // error
        'no-console': 2,
        'no-debugger': 2,

        'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
        'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
        'valid-typeof': 2,               // http://eslint.org/docs/rules/valid-typeof
        'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
        'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
        'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
        'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
        'no-labels': 2,                  // http://eslint.org/docs/rules/no-labels
        'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
        'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
        'no-new': 2,                     // http://eslint.org/docs/rules/no-new
        'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
        'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
        'no-new-wrappers': 2,            // http://eslint.org/docs/rules/no-new-wrappers
        'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
        'no-undef': 2,                   // http://eslint.org/docs/rules/no-undef
        'no-nested-ternary': 2,
        'no-const-assign': 2,
        'jasmine/no-focused-tests': 2,
        'key-spacing': [2, {
          beforeColon: false,
          afterColon: true,
        }],

        // warn
        'brace-style': [1,               // http://eslint.org/docs/rules/brace-style
              "1tbs", {
                "allowSingleLine": true
              }],
        'no-param-reassign': 1,          // http://eslint.org/docs/rules/no-param-reassign
        'no-lonely-if': 1,               // http://eslint.org/docs/rules/no-lonely-if
        'no-mixed-spaces-and-tabs': 1,   // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'yoda': 1,                       // http://eslint.org/docs/rules/yoda
        'prefer-template': 1,            // http://eslint.org/docs/rules/prefer-template
        'prefer-rest-params': 1,         // http://eslint.org/docs/rules/prefer-rest-params
        'arrow-body-style': [1, 'as-needed', { // http://eslint.org/docs/rules/arrow-body-style
          requireReturnForObjectLiteral: false,
        }],
        'arrow-parens': [1, 'as-needed', { // http://eslint.org/docs/rules/arrow-parens
          requireForBlockBody: true,
        }],
        'prefer-const': [1, {
           destructuring: 'any',
           ignoreReadBeforeAssign: true,
         }],
    }
};
