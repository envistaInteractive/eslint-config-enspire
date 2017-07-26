'use strict';

describe('no-redeclare Validations', () => {

    const errorMessageByEslint = '\'myVar\' is already defined.';

    it('should raise an error when a variable is declared several times', (done) => {

        const textToTest = `var myVar = 'sameple';
                            var myVar = 'sameple_2';`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a variable is not declared several times', (done) => {

        const textToTest = `var myVar = 'sameple';
                            var myVar2 = 'sameple_2';`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
