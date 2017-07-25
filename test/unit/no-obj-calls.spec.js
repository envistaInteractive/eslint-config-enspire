'use strict';

describe('no-obj-calls Validations', () => {

    const errorMessageByEslint = '\'Math\' is not a function';

    it('should raise an error when global object is assigned to a variable', (done) => {

        const textToTest = 'var mathFunctions = Math();';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when global object isn\'t assigned to a variable', (done) => {

        const textToTest = 'var pi = Math.PI;';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
