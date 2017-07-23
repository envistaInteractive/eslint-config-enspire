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
describe('comma-spacing Validations', () => {
    const errorMessagesByEslint = {
        required: 'A space is required',
        noShouldBe: 'There should be no space'
    };

    it('(Testing option after = true) should raise an error when there isn\'t a spacing after comma', (done) => {
        const textToTest = `sum(1,2);`;
        expect(executeOnText(textToTest)).to.include(errorMessagesByEslint.required);
        return done();
    });

    it('(Testing option after = true) should not raise an error when there is a spacing after comma', (done) => {
        const textToTest = `sum(1, 2);`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.required);
        return done();
    });

    it('(Testing option before = false) should raise an error when there is a spacing before comma', (done) => {
        const textToTest = `subtract(1 ,2);`;
        expect(executeOnText(textToTest)).to.include(errorMessagesByEslint.noShouldBe);
        return done();
    });

    it('(Testing option before = false) should not raise an error when there isn\'t a spacing before comma', (done) => {
        const textToTest = `subtract(1, 2);`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.noShouldBe);
        return done();
    });
});
