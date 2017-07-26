'use strict';

describe('no-void Validations', () => {

    const errorMessageByEslint = 'Expected \'undefined\' and instead saw \'void\'';

    it('should raise an error when the void operator is used', (done) => {

        const textToTest = 'var myVar = void someFunction();';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when the void operator is not used', (done) => {

        const textToTest = 'var myVar = someFunction();';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
