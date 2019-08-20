'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const expect = chai.expect;
const chaiString = require('chai-string');
chai.use(chaiString);
const common = require('../configs/common');
//const util = require('util'); // optional use

const engine = new CLIEngine({
    envs: ['node', 'mocha'],
    useEslintrc: false,
    rules: common.rules
});

const executeOnText = (text) => JSON.stringify(engine.executeOnText(text).results);
const betterDotNotation = 'is better written in dot notation';
const sintaxError = 'is a syntax error';

describe('Dot-notation Validations', () => {

    it('should raise error when dot-notation is not used', (done) => {

        let text = 'b = a[\'a\'];';
        expect(executeOnText(text)).to.include(betterDotNotation);
        return done();

    });
    it('should not raise error when dot-notation is used', (done) => {

        let text = 'b = a.a;';
        expect(executeOnText(text)).to.not.include(betterDotNotation);
        return done();

    });
    it('should not raise error when keyword is used', (done) => {

        let text = 'Joi.string().default(\'defValue\');';
        expect(executeOnText(text)).to.not.include(sintaxError);
        return done();

    });

    it('should not raise error when try catch is used', (done) => {

        let text = 'try{}catch(e){}';
        expect(executeOnText(text)).to.not.include(sintaxError);
        return done();

    });

});

/**

here, others validations of common rules. Please group in descriptions by rule

describe('XXXXXXX Validations', () => {
 // it...
}

/** Example for good and big log */
// console.log(util.inspect(executeOnText(text), true, 12, true));
