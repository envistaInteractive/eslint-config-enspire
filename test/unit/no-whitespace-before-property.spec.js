'use strict';

describe('No whitespace before property Validations', () => {

    const errorMessageByEslint = 'Unexpected whitespace before property bar.';

    it('should raise error when Unexpected whitespace before property bar.', (done) => {

        const textToTest = 'foo. bar';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when Unexpected whitespace before property bar.', (done) => {

        const textToTest = 'foo.bar';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
