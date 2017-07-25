'use strict';

describe('space-unary-ops Validations', () => {

    const errorMessageByEslint = 'Unexpected space before unary operator';
    it('should raise an error because have spaces before unary operators', (done) => {

        const textToTest = 'var foo; foo --;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because spaces before unary operators', (done) => {

        const textToTest = 'var foo; foo--;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
