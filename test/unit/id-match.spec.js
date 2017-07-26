'use strict';

describe('id-match Validations', () => {

    const errorMessagesByEslint = {
        sample1: 'Identifier \'myVar\' does not match the pattern \'^[a-zA-Z0-9_$]*$\'',
        sample2: 'Identifier \'my_var\' does not match the pattern \'^[a-zA-Z0-9_$]*$\'',
        sample3: 'Identifier \'_my_var\' does not match the pattern \'^[a-zA-Z0-9_$]*$\''
    };

    it('should not raise an error when a variable name is: myVar', (done) => {

        const textToTest = 'var myVar = \'sample 1\';';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.sample1);
        return done();

    });

    it('should not raise an error when a variable name is: my_var', (done) => {

        const textToTest = 'var my_var = \'sample 2\';';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.sample2);
        return done();

    });

    it('should not raise an error when a variable name is: _my_Var', (done) => {

        const textToTest = 'var _my_Var = \'sample 3\';';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.sample3);
        return done();

    });

});
