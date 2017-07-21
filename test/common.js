'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const expect = chai.expect;
const chaiString = require('chai-string');
chai.use(chaiString);
const common = require('../configs/common'); // optional use
const util = require('util'); // optional use

const engine = new CLIEngine({
    envs: ['node', 'mocha'],
    useEslintrc: false,
    // rules: common.rules -> Optional use
    rules: {
        'dot-notation': [
            'error',
            {
                allowKeywords: true
            }
        ]
    }
});

const executeOnText = (text) => engine.executeOnText(text).results;

describe('Dot-notation Validations', () => {

    const message1 = 'is better written in dot notation';
    const message2 = 'default is a syntax error';

    it('it should validate better written', () => {
        let text = 'b = a[\'a\'];';
        expect(JSON.stringify(executeOnText(text))).to.include(message1);
    });
    it('it should not validate better written', () => {
        let text = 'b = a.a;';
        expect(JSON.stringify(executeOnText(text))).to.not.include(message1);
    });
    it('it should not validate default function', () => {
        let text = 'Joi.string().default(\'defValue\');';
        // example of big log
        expect(JSON.stringify(executeOnText(text))).to.not.include(message2);
    });
    it('it should not validate try catch', () => {
        let text = 'try{}catch(e){}';
        // example of big log
        expect(JSON.stringify(executeOnText(text))).to.not.include(message2);
    });
});



/**

here, others validations of common rules. Please group in descriptions by rule

describe('XXXXXXX Validations', () => {
 // its...
}


/** Example for good and big log */
// console.log(util.inspect(executeOnText(text), true, 12, true));


