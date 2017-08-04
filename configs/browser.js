'use strict';

module.exports = {
    'env': {
        'browser': true,
        'jquery': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            4,
            {'SwitchCase': 1}
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'warn',
            'always'
        ]
    }
};
