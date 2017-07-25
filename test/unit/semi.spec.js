'use strict';

describe('semi Validations', () => {

    const errorMessageByEslint = 'Missing semicolon';
    it('should raise an error because not used semicolons', (done) => {

        const textToTest = `var envista = "double"
                            var enspire = "double"`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because semicolons are used', (done) => {

        const textToTest = `var envista = "double";
                            var enspire = "double";`;

        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
