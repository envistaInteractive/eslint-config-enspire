'use strict';

describe('no-useless-concat Validations', () => {

    const errorMessageByEslint = 'Unexpected string concatenation of literals';
    it('should raise an error because have unnecessary concatenation of strings', (done) => {

        const textToTest = 'var a = \'1\' + \'0\';';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have unnecessary concatenation of strings', (done) => {

        const textToTest = `var c = a + b;
                            var c = '1' + a;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
