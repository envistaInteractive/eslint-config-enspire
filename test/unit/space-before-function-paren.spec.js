'use strict';

describe('space-before-function-paren Validations', () => {

    const errorMessageByEslint = 'Missing space before function parentheses';

    it('should raise error because not have space before function paren', (done) => {

        const textToTest = 'function foo() {}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error because have space before function paren', (done) => {

        const textToTest = 'function foo () {}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
