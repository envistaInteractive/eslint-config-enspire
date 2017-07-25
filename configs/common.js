'use strict';

module.exports = {
    rules: {
        // http://eslint.org/docs/rules/#possible-errors
        //SANTI
        'comma-dangle': [
            'error',
            'never'
        ],
        'no-cond-assign': [
            'error',
            'always'
        ],
        'no-console': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        //SANTI
        // http://eslint.org/docs/rules/#best-practices
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        curly: [
            'error',
            'all'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': [
            'error',
            {
                allowKeywords: true
            }
        ],
        eqeqeq: 'error',
        'no-extend-native': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        // @TODO: Check need for next rule
        // needs to allow `const self = this;`
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': [
            'error',
            'always'
        ],
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-void': 'error',
        'no-with': 'error',
        radix: 'error',
        'wrap-iife': [
            'error',
            'inside'
        ],
        yoda: [
            'error',
            'never'
        ],

        // http://eslint.org/docs/rules/#strict-mode
        strict: [
            'error',
            'safe'
        ],
        // http://eslint.org/docs/rules/#variables
        'no-delete-var': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': [
            'error',
            {
                functions: false
            }
        ],

        // http://eslint.org/docs/rules/#stylistic-issues
        'array-bracket-spacing': [
            'error',
            'never',
            {
                singleValue: true,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        'brace-style': [
            'error',
            '1tbs'
        ],
        camelcase: 'error',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-this': [
            'error',
            'self'
        ],
        'eol-last': [
            'error',
            'always'
        ],

        // Non-ASCII characters are not allowed in identifiers for variables.
        'id-match': [
            'error',
            '^[a-zA-Z0-9_$]*$',
            {
                properties: true
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true
            }
        ],
        'new-cap': [
            'error',
            {
                capIsNew: false
            }
        ],
        //CRISTIAN
        'new-parens': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        'no-spaced-func': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: true
            }
        ],
        'one-var': [
            'error',
            'never'
        ],
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        //CRISTIAN
        //STEVENSON
        'operator-linebreak': [
            'error',
            'after'
        ],
        'padded-blocks': [
            'error',
            'always'
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'unicode-bom': 'error'
        //STEVENSON
    }
};

