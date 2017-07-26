'use strict';

describe('no-unused-vars Validations', () => {

    const errorMessageByEslint = '\'b\' is defined but never used';
    it('should raise an error because has unused variables', (done) => {

        const textToTest = 'var b;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has unused variables', (done) => {

        const textToTest = 'var b; b = 2;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
