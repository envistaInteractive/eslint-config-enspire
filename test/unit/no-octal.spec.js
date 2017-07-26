'use strict';

describe('no-octal Validations', () => {

    const errorMessageByEslint = 'Octal literals should not be used';

    it('should raise an error when there is an octal literal', (done) => {

        const textToTest = 'var myOctal = 071;';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there is not an octal literal', (done) => {

        const textToTest = 'var myOctal = \'071\';';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
