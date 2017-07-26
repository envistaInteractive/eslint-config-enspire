'use strict';

describe('no-undef Validations', () => {

    const errorMessageByEslint = '\'b\' is not defined.';
    it('should raise an error because not declared variable', (done) => {

        const textToTest = 'b = 10;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because declared variable', (done) => {

        const textToTest = 'var b = 10;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
