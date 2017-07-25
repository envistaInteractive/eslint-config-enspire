'use strict';

describe('space-infix-ops Validations', () => {

    const errorMessageByEslint = 'Infix operators must be spaced';
    it('should raise an error because operators not be spaced', (done) => {

        const textToTest = 'var a={b:1};';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because operators be spaced', (done) => {

        const textToTest = 'var a = {b:1};';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
