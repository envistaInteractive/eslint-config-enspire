'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const common = require('../configs/common');
const expect = chai.expect;

const cli = new CLIEngine({
    envs: ['node', 'mocha', 'es6'],
    useEslintrc: false,
    rules: common.rules
});

describe('Validations for common JS files', () => {

    it('should not raise an error when all rules are successful applied', (done) => {

        //let report = cli.executeOnFiles([ './styleguides/common.js' ]); //For test inside the IDE
        let report = cli.executeOnFiles([ './common.js' ]); //For test by console
        console.log(report);
        console.log('#####');
        let numErrors = report.errorCount;
        expect(numErrors).to.equal(0);
        done();

    });

});
