'use strict';

module.exports = {
    env: {
        node: true,
        mocha: true,
        jasmine: true,
        es6: true
    },
    rules: {
        'global-require': 'error',
        'callback-return': [
            'error',
            [
                'done',
                'send',
                'cb',
                'callback',
                'next'
            ]
        ],
        'handle-callback-err': [
            'error',
            '^.*(e|E)rr'
        ],
        'no-mixed-requires': [
            'error',
            {
                grouping: false,
                allowCall: true
            }
        ],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'prefer-const': 'error'
        /* @TODO: bring up for discussion
        'no-process-env': 'error'
        'no-restricted-modules': [
            'error',
            paths: [],
            patterns: []
        ]
        */
    },
    // testing helpers
    globals: {
        define: true,
        require: true,
        exports: true,
        module: true,
        describe: true,
        before: true,
        beforeEach: true,
        after: true,
        afterEach: true,
        it: true,
        inject: true,
        expect: true
    }
};

