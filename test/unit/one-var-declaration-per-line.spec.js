'use strict';

describe('No one-var-declaration-per-line Validations', () => {

    const errorMessageByEslint = 'one-var-declaration-per-line';

    it('should raise error when  Expected variable declaration to be on a new line.', (done) => {

        const textToTest = 'var a, b, c = 0;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when  Expected variable declaration to be on a new line.', (done) => {

        const textToTest = 'var a = 0';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
