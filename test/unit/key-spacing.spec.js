'use strict';

describe('key-spacing Validations', () => {

    const errorMessageByEslint = 'Extra space after key \'foo\'';
    it('should raise an error because has spaces between the key and the colon in object literals', (done) => {

        const textToTest = 'var obj = { "foo" : 42 };';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has spaces between the key and the colon in object literals', (done) => {

        const textToTest = 'var obj = { "foo": 42 };';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
