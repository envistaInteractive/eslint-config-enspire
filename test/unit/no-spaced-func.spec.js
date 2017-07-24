'use strict';

describe('No Spaced func Validations', () => {

    const errorMessageByEslint = 'Unexpected space between function name and paren.';

    it('should raise error when Unexpected space between function name and paren', (done) => {

        const textToTest = `fn
                            ()`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when Unexpected space between function name and paren', (done) => {

        const textToTest = 'fn()';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
