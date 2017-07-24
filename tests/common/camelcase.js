'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');

const expect = chai.expect;
const chaiString = require('chai-string');
chai.use(chaiString);
const common = require('../../configs/common');
const util = require('util'); // optional use

const engine = new CLIEngine({
    envs: ['node', 'mocha'],
    useEslintrc: false,
    rules: common.rules
});

const executeOnText = (text) => JSON.stringify(engine.executeOnText(text).results);
describe('no-console Validations', () => {
    const errorMessageByEslint = 'is not in camel case';

    it('should raise error when a variable is not camel case', (done) => {
        const textToTest = `sample_var = '';`;
        expect(executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();
    });

    it('should not raise error when a variable is camel case', (done) => {
        const textToTest = `sampleVar = '1';`;
        expect(executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();
    });

});
