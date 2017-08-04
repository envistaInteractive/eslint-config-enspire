'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const browser = require('../configs/browser');
const expect = chai.expect;

const cli = new CLIEngine({
    envs: ['browser', 'jquery'],
    useEslintrc: false,
    rules: browser.rules
});

describe('Validations for browser files', () => {

    it('should not raise an error when all rules are successful applied', (done) => {

        //let report = cli.executeOnFiles([ './styleguides/browser.js' ]); //For test inside the IDE
        let report = cli.executeOnFiles([ './browser.js' ]); //For test by console
        console.log(report);
        console.log('#####');
        let numErrors = report.errorCount;
        expect(numErrors).to.equal(0);
        done();

    });

});
