'use strict';

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            // @TODO: Update this setting once becomes mainstream
            // https://eslint.org/docs/user-guide/configuring#deprecated
            experimentalObjectRestSpread: true
        }
    },
    extends: [
        './configs/common.js',
        './configs/node.js',
        './configs/browser.js'
    ],
    rules: {
        // Additional rules
    }
};

