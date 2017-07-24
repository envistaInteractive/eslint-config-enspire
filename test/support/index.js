'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const chaiString = require('chai-string');
chai.use(chaiString);
const common = require('../../configs/common');
const expect = chai.expect;

const engine = new CLIEngine({
    envs: ['node', 'mocha'],
    useEslintrc: false,
    rules: common.rules
});

const executeOnText = (text) => JSON.stringify(global.engine.executeOnText(text).results);

global.engine = engine;
global.expect = expect;
global.executeOnText = executeOnText;

