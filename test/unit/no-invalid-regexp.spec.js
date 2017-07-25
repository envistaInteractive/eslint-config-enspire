'use strict';

describe('no-invalid-regexp Validations', () => {

    const errorMessageByEslint = 'Invalid regular expression';

    it('should raise an error if there is a invalid regular expression strings in constructors', (done) => {

        const textToTest = 'new RegExp(\'[\');';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error if there isn\'t a invalid regular expression strings in constructors', (done) => {

        const textToTest = 'new RegExp(\'[]\');';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
