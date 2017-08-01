'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const common = require('../configs/common');
const node = require('../configs/node');
const rules = Object.assign({}, common.rules, node.rules);
const expect = chai.expect;

const cli = new CLIEngine({
    envs: ['node', 'mocha', 'es6'],
    useEslintrc: false,
    rules: rules
});

describe('Validations for NodeJS files', () => {

    it('should not raise an error when all rules are successful applied', (done) => {

        let report = cli.executeOnFiles([ './styleguides/node.js' ]); //For test inside the IDE
        //let report = cli.executeOnFiles([ './node.js' ]); //For test by console
        console.log(report);
        console.log('#####');
        let numErrors = report.errorCount;
        expect(numErrors).to.equal(0);
        done();

    });

});

