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
    const errorMessageByEslint = 'Unexpected console statement';

    it('should raise an error when a method of console is used', (done) => {
        const textToTest = `console.log('a');`;
        expect(executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();
    });

    it('should not raise an error when a method of console is not used', (done) => {
        const textToTest = `methodOfExample('a');`;
        expect(executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();
    });

});
