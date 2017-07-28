'use strict';

const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const chaiString = require('chai-string');
chai.use(chaiString);
const common = require('../../configs/common');
const expect = chai.expect;

const cli = new CLIEngine({
    envs: ['node', 'mocha', 'es6'],
    useEslintrc: false,
    rules: common.rules
});

describe('file for NodeJS Validations', () => {

    it('should not raise an error when all rules are successful applied', (done) => {

        var report = cli.executeOnFiles([ './file-node.js' ]);
        let numErrors = report.errorCount;
        expect(numErrors).to.equal(0);
        done();

    });

});
