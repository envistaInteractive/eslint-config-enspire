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
describe('no-extra-semi Validations', () => {
    const errorMessageByEslint = 'Unnecessary semicolon';

    it('should raise an error when an unnecessary semicolon appears', (done) => {
        const textToTest = `function myFunc() { \
                                \n\treturn 'sample'; \
                            \n};`;
        expect(executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();
    });

    it('should not raise an error when an unnecessary semicolon doesn\'t appear', (done) => {
        const textToTest = `var x = 'my var';`;
        expect(executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();
    });

});
