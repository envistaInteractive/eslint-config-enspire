'use strict';

describe('valid-typeof Validations', () => {

    const errorMessagesByEslint = {
        notRequireStringLiterals: 'Invalid typeof comparison value',
        requireStringLiterals: 'Typeof comparisons should be to string literals'
    };

    it('should raise an error when a comparision of typeof is invalid', (done) => {

        const textToTest = 'if (typeof x == \'a string\') { return true; }';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.notRequireStringLiterals);
        return done();

    });

    it('should not raise an error when a comparision of typeof is valid', (done) => {

        const textToTest = 'if (typeof y == x) { return true; }';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.notRequireStringLiterals);
        return done();

    });

});
