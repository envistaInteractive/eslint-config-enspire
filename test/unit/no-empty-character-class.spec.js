'use strict';

describe('no-empty-character-class Validations', () => {

    const errorMessageByEslint = 'Empty class';

    it('should raise an error when a empty character is in a regular expression', (done) => {

        const textToTest = '/^_[]/.test("_user");';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a empty character is not in a regular expression', (done) => {

        const textToTest = '/^_[a-z]/.test("_user");';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
