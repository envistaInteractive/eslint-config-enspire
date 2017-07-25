'use strict';

describe('space-in-parens Validations', () => {

    const errorMessageByEslint = 'There should be no spaces inside this paren';
    it('should raise an error because have spaces inside of parentheses', (done) => {

        const textToTest = 'var foo = ( 1 + 2 ) * 3;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have spaces inside of parentheses', (done) => {

        const textToTest = 'var foo = (1 + 2) * 3;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
