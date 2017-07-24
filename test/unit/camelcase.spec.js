'use strict';

describe('camelcase Validations', () => {
    const errorMessageByEslint = 'is not in camel case';

    it('should raise error when a variable is not camel case', (done) => {
        const textToTest = `sample_var = '';`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();
    });

    it('should not raise error when a variable is camel case', (done) => {
        const textToTest = `sampleVar = '1';`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();
    });

});
