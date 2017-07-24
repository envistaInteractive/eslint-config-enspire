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
describe('max-len Validations', () => {
    const errorMessagesByEslint = {
        forLine: 'exceeds the maximum line length of',
        forComment: 'exceeds the maximum comment line length of'
    };

    it(`(Test for option 'code') should raise an error when a line has more length than maximum line length`, (done) => {
        const textToTest = `var a = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890;`;
        expect(executeOnText(textToTest)).to.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'code\' ) should not raise an error when a line has less length than maximum line length', (done) => {
        const textToTest = `var b = 1234567890;`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'ignoreUrls\' = true ) should not raise an error when a line which includes an URL has more length than maximum line length', (done) => {
        const textToTest = `var c = 'http://sampleurl.com/123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'ignoreComments\' = by default = true) should not raise an error when a comment line has more length than maximum line length', (done) => {
        const textToTest = `/* \n \
                            *This is a comment which exceeds the maximum line length for comments.................................................................. \n \
                            */`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forComment);
        return done();
    });

    it('(Test for option \'ignoreTrailingComments\' = by default = true) should not raise an error when a comment line has more length than maximum line length', (done) => {
        const textToTest = `var d = '1234567890'; //This is a comment which exceeds the maximum line length for comments..................................................................`;
        expect(executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forComment);
        return done();
    });
});
