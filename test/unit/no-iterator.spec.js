'use strict';

describe('no-iterator Validations', () => {

    const errorMessageByEslint = 'Reserved name \'__iterator__\'';
    it('should raise an error because reserved name __iterator__ is used', (done) => {

        const textToTest = 'var foo; foo.__iterator__ = function () {};';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because reserved name __iterator__ is not used', (done) => {

        const textToTest = 'var foo; var __iterator__ = foo;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});

