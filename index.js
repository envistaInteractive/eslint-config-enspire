'use strict';

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    extends: ['./configs/common.js', './configs/node.js', './configs/browser.js'],
    rules: {
        // Additional rules
    }
};
