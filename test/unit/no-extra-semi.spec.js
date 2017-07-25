'use strict';

describe('no-extra-semi Validations', () => {

    const errorMessageByEslint = 'Unnecessary semicolon';
    it('should raise an error when an unnecessary semicolon appears', (done) => {
        
        const textToTest = `function myFunc() { \
                                \n\treturn 'sample'; \
                            \n};`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it(`should not raise an error when an
        unnecessary semicolon doesn\'t appear`, (done) => {
        
            const textToTest = 'var x = \'my var\';';
            global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
            return done();

    });

});
